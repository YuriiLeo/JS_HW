
// otrumatu danni z bec
// fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${KEY}`)
//     .then(response => response.json())
//     .then((data) => {
// console.log(data);
//     })
//     .catch((error) => {
// console.log(error);

//     });


// 1. Base URL
// 2. resource
// 3. params (filtru)


// const form = document.querySelector(".form");
// const select = document.querySelector(".category");
// const input = document.querySelector(".input");
// const title = document.querySelector(".counter");
// const list = document.querySelector(".list");

// const KEY = "361dfb963a03404d966199b09b659c9e";
// const BASE_URL = "https://newsapi.org/v2";
// const URL = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=${selectEl}&country=ua&pageSize=${inputEl}`;

// const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const selectEl = select.value;
//     const inputEl = input.value;
//     const url = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=sports&country=ua&pageSize=10`;

//     fetch(URL)
// .then(response => response.json())
//     .then((data) => {
//         console.log(data);
//         title.textContent = `"Vsogo ststey" ${data?.totalResults}`;
//         list.innerHTML = "";

//         insertContent(data.articles);

//     })
//     .catch((error) => {
// console.log(error);
//     });

// }

// form.addEventListener("submit", handleSubmit);

// const createListItem = (item) =>
//     `<li>
// ${item.urlToImage ? `<img src="${item.urlToImage}" alt="${item.description}">` : ""}
//     <h2>${item.title || ""}</h2>
//     <p>${item.description || ""}</p>
//     <a href="${item.url ?? ""}" target="_blank"></a>
//     </li>`;

// // const generateContent = (array) => array.reduce((acc, item) => acc + createListItem(item), "");
// // const generateContent = (array) => array?.reduce((acc, item) => acc + createListItem(item), ""); ?nema array znachut dali ne pracui
// const generateContent = (array) => array ? array.reduce((acc, item) => acc + createListItem(item), "") : "";

// const insertContent = (array) => {
//     const result = generateContent(array);
//     list.insertAdjacentHTML("beforeend", result);
// };

// const refs = {
//     searchForm: document.querySelector(".form"),
//     articlesContainer: document.querySelector("."),
// };

// refs.searchForm.addEventListener("submit", onSearch);

// const options = {
//     headers: {
//         Authorization: "361dfb963a03404d966199b09b659c9e",
//     },
// };

// const url = "https://newsapi.org/v2/everything?q=cat&lanuage=en&pageSize=5&page=1";

// fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);
// // .catch(error => error())