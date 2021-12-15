// console.log(axios)


// axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(({ data }) => {
//         const ability = data.abilities[0].ability.url;
//         return axios.get(ability)
//     })
//     .then(({ data }) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err))



const root = document.querySelector('.root')
const ul = document.createElement('ul')




axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(({ data }) => {
        const pokemons = data.results;
        // console.log(pokemons)
        for (pokemon of pokemons) {
            const li = document.createElement('li');

            li.innerText = "Name: " + pokemon.name



            ul.append(li);
        }
    })
    .catch((err) => console.log(err))


root.append(ul)