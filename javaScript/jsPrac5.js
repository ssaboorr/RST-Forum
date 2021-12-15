// Promise AND Request
// console.log('Working')
// const count = Math.random()


// let countValue = new Promise(function(resolve, reject) {
//     if (count < 0.5) {
//         resolve()
//     } else {
//         reject()
//     }
// })


// countValue.then(() => console.log("promise fulfilled")).catch(err => console.log("promise rejected"))


// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pages = {
//                 '/users': [
//                     { id: 1, username: 'john' },
//                     { id: 2, username: 'jane' },
//                 ],
//                 '/users/1': {
//                     id: 1,
//                     username: 'johndoe',
//                     topPostId: 53231,
//                     city: 'mumbai',
//                 },
//                 '/users/5': {
//                     id: 1,
//                     username: 'janedoe',
//                     topPostId: 32443,
//                     city: 'pune',
//                 },
//                 '/posts/53231': {
//                     id: 1,
//                     title: 'Really amazing post',
//                     slug: 'really-amazing-post',
//                 },

//             };


//             const data = pages[url]


//             if (data) {
//                 resolve({ status: 200, data });
//             } else {
//                 reject({ status: 404 });
//             }
//         }, 3000);
//     });
// };

// fakeRequest('/users')
//     .then(response => {
//         const userID = response.data[0].id;
//         fakeRequest(`/users/${userID}`)
//             .then(response => {
//                 const postId = response.data.topPostId;
//                 fakeRequest(`/posts/${postId}`)
//                     .then((response) => {
//                         console.log(response)
//                     })
//                     .catch((err) => console.log(err))
//             })
//             .catch((err) => console.log(err))

//     })
//     .catch((err) => console.log(err))


// const reqUrl = fetch('https://pokeapi.co/api/v2/pokemon/ditto')

// reqUrl
//     .then(res => {
//         if (res.status !== 200) {
//             throw new Error();
//         } else {
//             return res.json();
//         }
//     })
//     .then((data) => {
//         const ability = data.abilities[0].ability.url;
//         return fetch(ability)
//     })
//     .then(res => {
//         if (res.status !== 200) {
//             throw new Error();
//         } else {
//             return res.json();
//         }
//     })
//     .then(data => console.log(data))
//     .catch((err) => console.log('THE REQUEST DID NOT WORK'));