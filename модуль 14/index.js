const validate = new JustValidate('.form')

validate.addField('.title', [
    {
        rule: 'required',
        errorMessage: 'Введите Название',
    },
])

validate.addField('.genre', [
    {
        rule: 'required',
        errorMessage: 'Введите жанр',
    },
])

validate.addField('.release', [
    {
        rule: 'required',
        errorMessage: 'Введите год',
    },
])


function handleFormSubmit(e) {
    e.preventDefault()

    const title = document.querySelector('.title').value;
    const genre = document.querySelector('.genre').value
    const release = document.querySelector('.release').value
    const isWatched = document.querySelector('.isWatched').checked

    const film = {
        title,
        genre,
        release,
        isWatched,
    }

    addToLocalStorage(film)
    resetForm()
}

function addToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || []
    films.push(film)
    localStorage.setItem('films', JSON.stringify(films))

    renderTable()
}

function renderTable() {
    const films = JSON.parse(localStorage.getItem('films')) || []
    const filmtbody = document.querySelector('.film-tbody');
    filmtbody.innerHTML = ''

    films.forEach((film) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.genre}</td>
        <td>${film.release}</td>
        <td>${film.isWatched ? 'Да' : 'Нет'}</td>
        <td>
            <button class="edit-btn" data-title="${film.title}">Редактировать</button>
            <button class="delete-btn" data-title="${film.title}">Удалить</button>
        </td>`
        filmtbody.appendChild(row)
    });
}

function handleDelete(title) {
    let films = JSON.parse(localStorage.getItem('films')) || [];
    films = films.filter(film => film.title !== title);
    localStorage.setItem('films', JSON.stringify(films));
    renderTable();
}

document.querySelector('.film-tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const title = e.target.dataset.title;
        handleDelete(title);
    }
});

let index = null

function handleEdit(title) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    const filmIndex = films.findIndex(f => f.title === title);

    if (index !== -1) {
        const film = films[filmIndex]
        document.querySelector('.title').value = film.title;
        document.querySelector('.genre').value = film.genre;
        document.querySelector('.release').value = film.release;
        document.querySelector('.isWatched').checked = film.isWatched;

        index = filmIndex
        document.querySelector('button[type="submit"]').style.display = 'none';
        document.querySelector('.edit-actions').style.display = 'block';
    }
}

document.querySelector('.film-tbody').addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const title = e.target.dataset.title;
        handleEdit(title);
    }
});

document.querySelector('.update-btn').addEventListener('click', () => {
    const films = JSON.parse(localStorage.getItem('films')) || [];

    if (index !== null) {
        films[index] = {
            title: document.querySelector('.title').value,
            genre: document.querySelector('.genre').value,
            release: document.querySelector('.release').value,
            isWatched: document.querySelector('.isWatched').checked,
        }   
        
        localStorage.setItem('films', JSON.stringify(films))
        renderTable()
        resetForm()
    }
});

document.querySelector('.cancel-btn').addEventListener('click', () => {
    resetForm();
});

function resetForm() {
    document.querySelector('.form').reset();
    editIndex = null;

    document.querySelector('button[type="submit"]').style.display = 'block';
    document.querySelector('.edit-actions').style.display = 'none';
}

function sortFilms(criterion) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.sort((a, b) => {
        if (criterion === 'release') {
            return parseInt(a[criterion]) - parseInt(b[criterion]);
        }
        return a[criterion].localeCompare(b[criterion]);
    });
    localStorage.setItem('films', JSON.stringify(films));
    renderTable();
}

document.querySelector('#sort').addEventListener('change', (e) => {
    sortFilms(e.target.value);
});


document.querySelector('.form').addEventListener('submit', handleFormSubmit);
renderTable()