const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
  const url =`https://rickandmortyapi.com/api/character/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { id, name, sprites } = pokemon;
  
  const pokeInnerHTML = `
  <div class="img-container">
  
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);
}

fetchPokemons();