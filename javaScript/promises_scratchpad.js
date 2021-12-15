const myPromise = new Promise((resolve, reject) => {
    const rand = Math.random();

    if (rand < 0.5) {
        resolve();
    } else {
        reject();
    }
});

myPromise
    .then(() => console.log('Promise fulfilled'))
    .catch(() => console.log('Promise rejected'));

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    { id: 1, username: 'john' },
                    { id: 2, username: 'jane' },
                ],
                '/users/1': {
                    id: 1,
                    username: 'johndoe',
                    topPostId: 53231,
                    city: 'mumbai',
                },
                '/users/5': {
                    id: 1,
                    username: 'janedoe',
                    topPostId: 32443,
                    city: 'pune',
                },
                '/posts/53231': {
                    id: 1,
                    title: 'Really amazing post',
                    slug: 'really-amazing-post',
                },
            };

            const data = pages[url];

            if (data) {
                resolve({ status: 200, data });
            } else {
                reject({ status: 404 });
            }
        }, 3000);
    });
};

fakeRequest('/users')
    .then((response) => {
        const userId = response.data[0].id;
        fakeRequest(`/users/${userId}`)
            .then((response) => {
                const postId = response.data.topPostId;
                fakeRequest(`/posts/${postId}`)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

// fakeRequest('/users')
//   .then((response) => {
//     const userId = response.data[0].id;
//     return fakeRequest(`/users/${userId}`);
//   })
//   .then((response) => {
//     const postId = response.data.topPostId;
//     return fakeRequest(`/posts/${postId}`);
//   })
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

const request = fetch('https://pokeapi.co/api/v2/pokemon/ditto');

request
    .then((res) => {
        if (res.status !== 200) {
            throw new Error();
        } else {
            return res.json();
        }
    })
    .then((data) => {
        const ability = data.abilities[0].ability.url;
        return fetch(ability);
    })
    .then((res) => {
        if (res.status !== 200) {
            throw new Error();
        } else {
            return res.json();
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => console.log('THE REQUEST DID NOT WORK'));

// console.log(axios);

// axios
//   .get('https://pokeapi.co/api/v2/pokemon/ditto')
//   .then(({ data }) => {
//     const ability = data.abilities[0].ability.url;
//     return axios.get(ability);
//   })
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch((err) => console.log('ERROR', err));

const root = document.querySelector('#root');
const ul = document.createElement('ul');

axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(({ data }) => {
        const pokemons = data.results;

        for (let pokemon of pokemons) {
            const li = document.createElement('li');
            li.innerText = pokemon.name;
            ul.append(li);
        }
    })
    .catch((err) => console.log(err));

root.append(ul);

// function getData() {
//   axios
//     .get('https://pokeapi.co/api/v2/pokemon')
//     .then((res) => console.log(res.data));
// }

// getData();

// async function greet() {
//   return 'hello';
// }

// greet()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// async function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') {
//     throw new Error();
//   }
//   return x + y;
// }

// add(9, 10)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// async function getData() {
//   // const pokemons = axios.get('https://pokeapi.co/api/v2/pokemon');
//   // pokemons.then((res) => console.log(res.data));

//   const req1 = await axios.get('https://pokeapi.co/api/v2/poemon');
//   const req2 = await axios.get(req1.data.results[0].url);
//   console.log(req2.data);
// }

// getData();

// async function getData() {
//     try {
//         const req1 = await axios.get('https://pokeapi.co/api/v2/pokemon');
//         const req2 = await axios.get(req1.data.results[0].url);
//         console.log(req2.data);
//     } catch (err) {
//         console.log("This didn't work");
//     }
// }

// getData();