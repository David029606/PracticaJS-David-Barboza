

const pokecard = document.getElementById("data-poke-card")
const pokename = document.getElementById("pokename")
const datapokename = document.getElementById("data-poke-name")
const pokeimgcontainer = document.getElementById("img-container")
const pokeimg = document.getElementById("data-poke-img")
const poketypes = document.getElementById("poke-types") 
const pokestats = document.getElementById("poke-stats")
const pokeid = document.getElementById("data-poke-id") 
const pokemoves = document.getElementById("poke-moves")

const fetchpokemon = () => {
 
    let pokeinput = pokename.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`
        
        fetch(url).then((res) => {
            if (res.status != "200"){
                console.log (res)
                pokeimage("./sad.jpg")

            } else {
                return res.json()
            }
           
        })
        .then((data) => {
            console.log(data)
            let pokeimgn = data.sprites.front_default;
            let pokestat = data.stats;
            const poketype = data.types;
            const pokemove = data.moves;
            pokeimage(pokeimgn)


            datapokename.textContent = data.name;
            pokeid.textContent = `N° ${data.id}`;
            renderPokemontypes(poketype);
            renderPokemonstats(pokestat);
            renderPokemonMoves(pokemove);

            console.log(pokestats)
            console.log(pokemoves)
            
        })
}

const renderPokemonMoves = (pokemove) => {
    pokemoves.innerHTML = "";
    pokemove.forEach(moves => {
        const moveElement = document.createElement("li")
        moveElement.textContent = moves.move.name;
        pokemoves.appendChild(moveElement);



    }
    )


}






const renderPokemontypes = (poketype) => {
    poketypes.innerHTML = "";
    poketype.forEach(type => {
      const typeTextElement = document.createElement("div")
      typeTextElement.textContent = "Type: " + type.type.name;
      poketypes.appendChild(typeTextElement);

  })
}

const pokeimage = (url) => {
    
    pokeimg.src = url

}

const renderPokemonstats = (pokestat) => {
    pokestats.innerHTML = "";
    pokestat.forEach(stat => {
        const statelement = document.createElement("div")
        const statElementName = document.createElement("div")
        const statElementAmount = document.createElement("div")
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statelement.appendChild(statElementName);
        statelement.appendChild(statElementAmount);
        pokestats.appendChild(statelement);


    } )





}




