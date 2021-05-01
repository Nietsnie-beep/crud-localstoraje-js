const poke_container = document.getElementById('poke_container');
const personaje_numbers = 150;

const fetchPersonaje = async () => {
    for (let i = 1; i < personaje_numbers; i++) {
        await getPokemon(i)
        
    }
}

const getPokemon= async id =>{
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const res = await fetch(url);
    const personaje = await res.json();
    console.log(personaje)
    createPersonajeCard(personaje)

    
}

const createPersonajeCard = (personaje) =>{
    const personajeEl = document.createElement('div');
    personajeEl.classList.add('pokemon');

    const imagen = personaje.image;

    const personajeInnerHTML = `<h1>${personaje.name}</h1> <img src="${imagen}"> <h3>${personaje.status}</h3>`;

    personajeEl.innerHTML = personajeInnerHTML;
    poke_container.appendChild(personajeEl)
    console.log(personajeInnerHTML)
}


fetchPersonaje()

