const refs = {
    buttonGet: document.querySelector(".get"),
    form: document.querySelector(".form"),
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    formUpdate : document.querySelector(".formUpdate"),
    titleUpdate: document.querySelector(".titleUpdate"),
    textUpdate: document.querySelector(".textUpdate"),
    buttonDelete: document.querySelector(".delete"),
    body: document.querySelector("body"),
}

console.log("Hello world");

// // Otrumannya dannuh
// const getPosts = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// };

// // Dodatu danni
// const createPost = (e) => {
//     e.preventDefault();
//     const title = refs.title.value;
//     const text = refs.text.value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         // body: JSON.stringify({ title, text, id: Date.now() }),
//          body: JSON.stringify({ title: title, body: text, id: Date.now() }),
//         headers: {
//            'Content-type': 'application/json; charset=UTF-8',
//                  }
//     })
//     .then(response => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// };

// // Radagyvatu danni
// const updatePost = (e) => {
//     e.preventDefault();
//     const title = refs.titleUpdate.value;
//     const text = refs.textUpdate.value;
//                                    // post/ tyt pushemo ID sho zminuemo
//     fetch('https://jsonplaceholder.typicode.com/posts/100', {
//         method: "PUT",
//         body: JSON.stringify({ title: title, body: text }),
//         headers: {
//            'Content-type': 'application/json; charset=UTF-8',
//                  },
//     })
//     .then(response => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// };


// const deletePost = () => {
//      fetch('https://jsonplaceholder.typicode.com/posts/100', {
//         method: "DELETE",
        
//     })
//     .then(response => response.json())
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
// };




// asunhronnyi

// const getPosts = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts');
// };

// getPosts()
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


//     // Dodatu danni
// const createPost = (e) => {
//     e.preventDefault();
//     const title = refs.title.value;
//     const text = refs.text.value;

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         // body: JSON.stringify({ title, text, id: Date.now() }),
//         body: JSON.stringify({ title: title, body: text, id: Date.now() }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     });
// };

// createPost()
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
        

////////      async/ await    ///////

// const getPosts = () => {
//     return fetch('https://jsonplaceholder.typicode.com/posts');
// };

// getPosts()
//     .then(response => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

const getPosts = async () => {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        createList(data);
    // mojna otrumatu danni vsereduni console.log(data);
    return data;
    } catch (error) {
        console.log(error);
    } finally {
        // sudu infu
    }  
}
// abo otrumatu danni zovni stvoruvshu okremy zminny i vukorustavshu then i catch
const data = getPosts();
data.then((data) => console.log(data));

    // Dodatu danni
const createList = (data) => {
    const result = data.reduce((acc, item) => (acc += `<li class="list-group-item">${item.title}</li>`), "");
    refs.body.insertAdjacentHTML("afterbegin", result);
};


const createPost = async (e) => {
    e.preventDefault();
    const title = refs.title.value;
    const text = refs.text.value;
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        // body: JSON.stringify({ title, text, id: Date.now() }),
        body: JSON.stringify({ title: title, body: text, id: Date.now() }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const data = await response.json();
    
    console.log(data);
    return data;
   } catch (error) {
    console.log(error);
   }
};

refs.buttonGet.addEventListener("click", getPosts);
refs.form.addEventListener("submit", createPost);
// refs.formUpdate.addEventListener("submit", updatePost);
// refs.buttonDelete.addEventListener("click", deletePost);


// const getPosts = async () => {
//     try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(response.data);
//         createList(response.data);
//     // mojna otrumatu danni vsereduni console.log(data);
//     return data;
//     } catch (error) {
//         console.log(error);
//     } finally {
//         // sudu infu
//     }
// }


// const createPost = async (e) => {
//     e.preventDefault();
//     const title = refs.title.value;
//     const text = refs.text.value;

//     try {
//         const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
//             { title: title, body: text },
//             {
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             }
//         );
//     } catch (error) {
//         console.log(error);
//     }
// };

