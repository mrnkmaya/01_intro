function sanitize(html) {
    const el = document.createElement('div');
    el.innerHTML = html;
    return el.textContent;
}

let user;

function setUser(userData) {
    user = userData;
}

function getUser() {
    return user;
}

function renderNetworkStatus(message) {
    let notification = document.querySelector('.network-status');

    if (!notification) {
        notification = document.createElement('div');
        notification.classList.add('network-status');
        document.body.append(notification);
    }

    notification.textContent = message;
    notification.style.display = message ? 'block' : 'none';
}

async function checkNetworkStatus() {
    const startTime = Date.now();

    try {
        const response = await fetch('https://sb-film.skillbox.cc/ping', { method: 'POST' });
        const duration = Date.now() - startTime;

        if (!response.ok) {
            throw new Error('Проблема с сетью');
        }

        if (duration > 500) {
            renderNetworkStatus('Медленное соединение');
        } else {
            renderNetworkStatus('');
        }
    } catch (error) {
        renderNetworkStatus('Проблема с сетью');
    }
}

function startNetworkPolling() {
    checkNetworkStatus();
    setInterval(checkNetworkStatus, 5000);
}

startNetworkPolling();


async function getFilms() {
    try {
        const user = getUser();
        const response = await fetch("https://sb-film.skillbox.cc/films", {
            headers: {
                email: user?.email
            }
        });

        const data = await response.json();

        if (!response.ok) {
            handleErrorResponse(data);
        }

        return data;
    } catch (error) {
        handleError(error);
        return [];
    }
}

function handleErrorResponse(data) {
    const isNeedAuth = data.errors.some(error => error.location === 'headers' && error.param === 'email');

    if (isNeedAuth) {
        const err = new Error('Некорректный email');
        err.name = 'AuthError';
        throw err;
    }
}

function handleError(error) {
    if (error.name === 'AuthError') {
        throw error;
    }
    console.error(error);
}

function renderTopBar(user) {
    const el = document.createElement('div');
    el.classList.add('topbar');

    el.innerHTML = `
      <span class="topbar-logo">Фильмотека</span>
      <div class="topbar-user user">
        <div class="user-name">${sanitize(user.name)}</div>
        <div class="user-email">${sanitize(user.email)}</div>
      </div>
    `;

    return el;
}

function renderFilms(films) {
    const el = document.createElement('div');
    el.classList.add('films');

    if (films.length === 0) {
        el.innerText = 'Cписок фильмов пока пуст';
        return el;
    }

    films.forEach((film) => {
        const filmEl = document.createElement('div');
        filmEl.classList.add('films-card');
        filmEl.dataset.watched = film.isWatched;

        filmEl.textContent = `${film.title} (${film.releaseYear})`;

        el.append(filmEl);
    });

    return el;
}

function renderGlobalError(message) {
    const el = document.createElement('div');

    el.innerHTML = `
      <div class="error">
        <div class="error-title">Упс... Возникла ошибка</div>
        <div class="error-message">${sanitize(message)}</div>
      </error>
    `;

    return el;
}

function renderAuthForm(props) {
    const form = document.createElement('form');
    form.classList.add('authForm')

    form.innerHTML = `
      <label for="name">Ваше имя</label>
      <input id="name" type="text" name="name" required="true" placeholder="Василий" />
      <label for="email">Эл. почта</label>
      <input id="email" type="text" name="email" required="true" placeholder="example@mail.com" />
      <button class="authForm-submit"type="submit">Войти</button>
    `;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);

        props.onSubmit(formProps);
    });

    return form;
}

function initAuth() {
    const app = document.getElementById("app");
    app.innerHTML = '';

    app.append(renderAuthForm({
        onSubmit: (user) => {
            setUser(user);
            initApp();
        }
    }));
}

async function initApp() {
    const app = document.getElementById("app");
    app.innerHTML = '';

    try {
        const user = getUser();
        if (!user) {
            initAuth();
            return;
        }
        const films = await getFilms();
        app.append(renderTopBar(user));
        app.append(renderFilms(films));
    } catch (error) {
        console.error(error);

        if (error.name === 'AuthError') {
            initAuth();
            return;
        }

        app.append(renderGlobalError(error.message));
    }
}

initApp();