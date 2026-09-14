const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");
const empty = document.getElementById("empty");

function render(list) {
  grid.innerHTML = list.map(game => `
    <article class="card">
      <div class="thumb">${game.icon}</div>
      <div class="card-body">
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <a class="play" href="${game.url}">Play ▶</a>
      </div>
    </article>
  `).join("");
  empty.hidden = list.length !== 0;
}

search.addEventListener("input", () => {
  const term = search.value.toLowerCase().trim();
  render(games.filter(g =>
    `${g.name} ${g.description}`.toLowerCase().includes(term)
  ));
});

render(games);
