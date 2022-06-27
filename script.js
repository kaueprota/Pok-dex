var quantidade = document.querySelector('#numeropokemon')
quantidade.addEventListener('keyup', () =>{

  pegarpokemons(quantidade.value);
  console.log(quantidade.value)
 
  
})


pegarpokemons(10)
function pegarpokemons(quantidade){
  fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
  .then(response => response.json())
  .then(allpokemon =>{
    var pokemons = []
    var pokedex = document.querySelector('.pokedex');

    allpokemon.results.map((val)=>{
      fetch(val.url)
      .then(response => response.json())
      .then(pokemonSingle => {
        pokemons.push({
          nome: val.name,
          Imagem: pokemonSingle.sprites.front_default
          })
      if(pokemons.length == quantidade){   
        pokedex.innerHTML = ""
        pokemons.map((val)=>{
          pokedex.innerHTML += `
          <div class="pokem">
          <img class="img-poke" src='${val.Imagem}'>
          <h3 class="nomepokemon">${val.nome}</h3>
          </div>
          
          `
          })
        }
        })
      
    })

  })
 
}