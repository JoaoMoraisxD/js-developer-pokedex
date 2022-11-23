const pokemonPage = document.getElementById('pokemonPage')
const limit = 1
let offset = sessionStorage.getItem('pokemonatual')

function convertPokepage(Pokemon) {
    
    return `
    <div class=" topo ${Pokemon.type}">
        <a href="index.html"><button class="button" type="button"  ></button></a>
        <section class="pokeDetails">
            <ol class="headerContent">
                <li class="num">${Pokemon.number}</li>
                <li class="name">${Pokemon.name}</li>
                <ol class="types">
                ${Pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            </ol>
            <img class="photo" src="${Pokemon.photo}" alt="${Pokemon.name}">
        </section>           
    </div>
    
    <div class="main">
        <section class="descriçao"> 
            <h1>Status Base </h1>
            <ol class="dados">
                <li class="hp">hp
                    <div class="container">
                        <div style="width:${Pokemon.base_stat[0]}%;" class="progress-bar-hp"></div>
                    </div>
                </li>
                
                <li class="attack">attack 
                    <div class="container">
                        <div style="width:${Pokemon.base_stat[1]}%;" class="progress-bar-at"></div>
                    </div>
                </li>
               
                <li class="defense">defense
                    <div class="container">
                        <div style="width:${Pokemon.base_stat[2]}%;" class="progress-bar-df" ></div>
                    </div>
                </li>
                
                <li class="speed">speed 
                    <div class="container">
                        <div style="width:${Pokemon.base_stat[5]}%;" class="progress-bar-spd"></div>
                    </div>
                </li>
            </ol>
            
            <h1>Abilidades </h1>
            <ol class="abilidades">
                ${Pokemon.abilities.map((ability) => `<li class="ability">${ability}</li>`).join('')}
            </ol>
        </section>
    </div> `


}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const pokePageHtml = pokemons.map(convertPokepage).join('')
        pokemonPage.innerHTML += pokePageHtml
    })
}

loadPokemonItens(offset,limit)

