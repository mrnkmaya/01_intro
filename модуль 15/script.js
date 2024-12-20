document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://sb-film.skillbox.cc/films";
  const emailHeader = { email: "ovikdevil@gmail.com" };

  async function renderTable(filter = "") {
      const filmsResponse = await fetch(`${apiUrl}?filter=${filter}`, { headers: emailHeader });
      const films = await filmsResponse.json();

      const filmTableBody = document.getElementById("film-tbody");
      filmTableBody.innerHTML = "";

      films.forEach((film) => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${film.title}</td>
              <td>${film.genre}</td>
              <td>${film.releaseYear}</td>
              <td>${film.isWatched ? "Да" : "Нет"}</td>
              <td>
                  <button class="delete-btn" data-id="${film.id}">Удалить</button>
              </td>
          `;
          filmTableBody.appendChild(row);
      });

      document.querySelectorAll(".delete-btn").forEach((btn) => {
          btn.addEventListener("click", async (e) => {
              const id = e.target.dataset.id;
              await fetch(`${apiUrl}/${id}`, { method: "DELETE", headers: emailHeader });
              renderTable();
          });
      });
  }

  document.getElementById("film-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.getElementById("title").value.trim();
      const genre = document.getElementById("genre").value.trim();
      const releaseYear = document.getElementById("releaseYear").value.trim();
      const isWatched = document.getElementById("isWatched").checked;

      if (!title || !genre || !releaseYear) {
          alert("Все поля, кроме галочки, обязательны для заполнения!");
          return;
      }

      const film = { title, genre, releaseYear, isWatched };

      await fetch(apiUrl, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              ...emailHeader,
          },
          body: JSON.stringify(film),
      });

      renderTable();
      e.target.reset();
  });

  document.getElementById("delete-all").addEventListener("click", async () => {
      if (confirm("Вы уверены, что хотите удалить все фильмы?")) {
          await fetch(apiUrl, { method: "DELETE", headers: emailHeader });
          renderTable();
      }
  });

  document.getElementById("filter-input").addEventListener("input", applyFilters);
document.getElementById("filter-watched").addEventListener("change", applyFilters);

function applyFilters() {
    const filterValue = document.getElementById("filter-input").value.toLowerCase();
    const watchedFilter = document.getElementById("filter-watched").value;

    const rows = document.querySelectorAll("#film-tbody tr");
    rows.forEach(row => {
        const title = row.cells[0].textContent.toLowerCase();
        const genre = row.cells[1].textContent.toLowerCase();
        const releaseYear = row.cells[2].textContent.toLowerCase();
        const isWatched = row.cells[3].textContent.trim().toLowerCase();

        const matchesTextFilter =
            title.includes(filterValue) ||
            genre.includes(filterValue) ||
            releaseYear.includes(filterValue);

        let matchesWatchedFilter = true;
        if (watchedFilter === "watched") {
            matchesWatchedFilter = isWatched === "да";
        } else if (watchedFilter === "not-watched") {
            matchesWatchedFilter = isWatched === "нет";
        }

        if (matchesTextFilter && matchesWatchedFilter) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

  renderTable();
});
