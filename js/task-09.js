myLibraryPage.js


// import { getProperGenre } from './trendingPage';
// import { getMovieByID } from "./MovieObjectByID";

const moviesContainer = document.querySelector(".container");
const moviesListContainer = document.querySelector('.movie-grid-list');
// const btnAddToWatched = document.querySelector(".btn-add-watched");
const btnAddToQueue = document.querySelector(".card__button-text");
const btnGetToWatched = document.querySelector('[data-action ="watched"]');
const btnGetToQueue = document.querySelector('[data-action ="queue"]');



// btnAddToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnAddToQueue.addEventListener("click", addQueueMoviesInStorage);
// btnGetToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnGetToQueue.addEventListener("click", getQueueMoviesInStorage);

const warningTextUa = "Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!"
const warningTextEng = " Unfortunately, there is no movie here yet.Therefore, we have selected the most popular movies especially for you.Happy viewing!"

const KEY_WATCHED = "watched-movies-in-storage";
const KEY_QUEUE = "queue-movies-in-storage";
const moviesWatchedInLocal = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
const moviesQueueInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];


export function getWatchedMoviesInStorage() {
    const markup = moviesWatchedInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        // const properTitle = makeMovieTitle(item);
      let properGenre = item.genre_ids;
    //     if (properGenre.length === 0) {
    //       console.log(properGenre.length);
    //     properGenre = 'No info';
    //   }
        properGenre.length === 0 ? properGenre = 'No info' : properGenre;
    
      if (item.poster_path) {
        return `<li class="grid-movie-card" id="${item.id}">
      <div class="movie-item">
      <div class="img-wrapper">
        <img class="movie-img"
        src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.title}"
        loading="lazy" />
        </div>
        <div class="movie-info-wrapper">
          <div class="movie-info">
            <h3 class="movie-title">${item.original_title}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${dateMarkup}</li>
              <li class="movie-rating">${voteMarkup}</li>
            </ul>
          </div>
        </div>
      </div>
    </li>`;
      } else {
        return `<li class="grid-movie-card" id="${item.id}>
      <div class="movie-item">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
      }
    })
    .join('');
  moviesListContainer.innerHTML = markup;
}

export function getQueueMoviesInStorage() {
        const getData = moviesQueueInLocal;
        console.log("getData", getData);
    console.log(JSON.parse(getData.length));
    
   if (getData.length >= 1) {const markup = moviesQueueInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        let properGenre = item.genre_ids;
    
        properGenre.length === 0 ? properGenre = 'No info' : properGenre;
    
      if (item.poster_path) {
        return `<li class="grid-movie-card" id="${item.id}">
      <div class="movie-item">
      <div class="img-wrapper">
        <img class="movie-img"
        src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.title}"
        loading="lazy" />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
      } else {
        return `<li class="grid-movie-card" id="${item.id}>
      <div class="movie-item">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
      }
    })
    .join('');
       moviesListContainer.innerHTML = markup;
   } else {
       moviesContainer.insertAdjacentHTML("beforebegin", `<p>${warningTextUa}</p>
                                                     <p> ${warningTextEng}</p>`);
    }
}

function getYear(date) {
  const dateArr = date.split('-');
  return dateArr[0];
}

function getRating(vote) {
    const voteAdapted = vote.toFixed(2);
    return voteAdapted;
}


const dateSt = { adult: false,
backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
genre_ids: [28, 18],
id: 361743,
media_type: "movie",
original_language: "en",
original_title: "Top Gun: Maverick",
overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
popularity: 4724.785,
poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
release_date: "2022-05-24",
title: "Top Gun: Maverick",
video: false,
vote_average: 8.372,
vote_count: 3025,
};

// { adult: false,
// backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
// genre_ids: [28, 18],
// id: 361743,
// media_type: "movie",
// original_language: "en",
// original_title: "Top Gun: Maverick",
// overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
// popularity: 4724.785,
// poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
// release_date: "2022-05-24",
// title: "Top Gun: Maverick",
// video: false,
// vote_average: 8.372,
// vote_count: 3025,
// }

// {adult: false,
// backdrop_path: "/lbLPVvgq16BD3IA6sIH3riu9ouO.jpg",
// genre_ids: [27, 9648, 878, 53],
// id: 762504,
// media_type: "movie",
// original_language: "en",
// original_title: "Nope",
// overview: "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
// popularity: 1419.195,
// poster_path: "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
// release_date: "2022-07-20",
// title: "Nope",
// video: false,
// vote_average: 7.094,
// vote_count: 830}
// 

// console.log(moviesQueueInLocal);

export function addWatchedMoviesInStorage(filmObject) {
    const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesWatchedInLocal.push(filmObject);
    console.log("In if",moviesWatchedInLocal);

        localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatchedInLocal));
        // localStorage.clear();
        getWatchedMoviesInStorage();
    } else {
      alert("Ти вже переглянув цей фільм");
    }
    return 
}

export function addQueueMoviesInStorage(filmObject) {
    const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    console.log("In if",moviesQueueInLocal);

        localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
        // localStorage.clear();
    getWatchedMovieFromStorage();
    } else {
      alert("Фільм вже у черзі на перегляд");
    }
    return 
}


// library.html
// додав обгортку div wrapper

// закоментував
// heder.scss
// .heder {
    // margin-left: auto;
  // margin-right: auto;
// }

// додав
// body.scss
// body {
//     height: 100%;
//     line-height: 1;
// }
// .wraper {
//     min-height: 100%;
//     display: flex;
//     flex-direction: column;
// }

// main {
// flex: 1 1 auto;
// }



import { log } from 'handlebars';
import { getMovieByID } from './MovieObjectByID';
// import { addWatchedMoviesInStorage, addQueueMoviesInStorage} from './myLibraryPage';

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');
const backdrop = document.querySelector('[backdrop]');
const cardContMarking = document.querySelector('.card__cont-marking');
const cardTableContainer = document.querySelector('.card__table');
const addToWatchedButton = document.querySelector('[data-add-to-watched]');
const addToQueueButton = document.querySelector('[data-add-to-queue]');






openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);
modalCardCont.addEventListener('click', onBackModalDropClick);
window.addEventListener('keydown', onEscClick);

// local 
const KEY_WATCHED = "watched-movies-in-storage";
const KEY_QUEUE = "queue-movies-in-storage";
const moviesWatchedInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
const moviesQueueInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
// 

function onCloseModalCard() {
  modalCardCont.classList.add('no-activ');
  const htmlEl = document.getElementsByTagName('HTML')[0];
  htmlEl.classList.remove('no-scroll');
  cardContMarking.innerHTML = '';
  cardTableContainer.innerHTML = '';
}

function onBackModalDropClick(evt) {
  if (!evt.target.classList.contains('card__cont')) {
    return;
  }
  onCloseModalCard();
}

function onEscClick(evt) {
  if (evt.key === 'Escape') {
    onCloseModalCard();
    backdrop.classList.add('is-hidden');
  }
}

// +++++++++++++++++++++++++++++++
function onOpenModalCard(event) {
  if (event.target.classList.contains('grid-movie-card')) {
    const filmID = event.target.attributes.id.value;
    //визиваємо ф-ію, що записує об'єкт фільму у змінну
    getMovieByID(filmID).then(res => cardMarkUp(res));

    modalCardCont.classList.remove('no-activ');
    const htmlEl = document.getElementsByTagName('HTML')[0];
    htmlEl.classList.add('no-scroll');

  }
  return;
}


function cardMarkUp(filmObject) {
  
  const markUPImg = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />`;
  cardContMarking.insertAdjacentHTML('afterbegin', markUPImg);

  const markUp = `<h1 class="card__table-heder">${filmObject.title}</h1>
      <table class="card__table">
        <tr class="card__table-vote">
          <td class="card__table-name ">Vote / Votes</td>
          <td class="card__table-value vote"><span>${filmObject.vote_average}</span> / ${filmObject.vote_count}</td>
        </tr>
        <tr class="card__table-popularity">
          <td class="card__table-name">Popularity</td>
          <td class="card__table-value">${filmObject.popularity}</td>
        </tr>
        <tr class="card__table-title">
          <td class="card__table-name">Original Title</td>
          <td class="card__table-value">${filmObject.title}</td>
        </tr>
        <tr class="card__table-genre">
          <td class="card__table-name last-child">Genre</td>
          <td class="card__table-value last-child">${filmObject.genre}</td>
        </tr>
      </table>
      <div class="card__about">
        <h2 class="card__about-heder">About</h2>
        <p class="card__about-text">${filmObject.overview}</p>
      </div>`;
 
  cardTableContainer.insertAdjacentHTML('afterbegin', markUp);
  addToWatchedButton.addEventListener('click', () => addWatchedMoviesInStorage(filmObject));
  addToQueueButton.addEventListener('click', () => addQueueMoviesInStorage(filmObject));

}


export function addWatchedMoviesInStorage(filmObject) {
    const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
  console.log("Before", localStorageArr);
  console.log("Film",filmObject.id);
  
    if (!localStorageArr.includes(filmObject.id)) {
    moviesWatchedInLocal.push(filmObject);
    console.log("In if",moviesWatchedInLocal);

    localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatchedInLocal));
    
      //  getWatchedMoviesInStorage();
     
    }
    
    return 
}

export function addQueueMoviesInStorage(filmObject) {
    const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
  console.log("Before", localStorageArr);
  console.log(filmObject);
  console.log("Цей фільм вже є", localStorageArr.includes(filmObject.id));
    if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    console.log("In if",moviesQueueInLocal);

    localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
    // getQueueMoviesInStorage();
    }
    return 
}

// ....

// import { getProperGenre } from './trendingPage';
// import { getMovieByID } from "./MovieObjectByID";
// import {  } from "./modalTemplate";

const moviesContainer = document.querySelector(".container");
const moviesListContainer = document.querySelector('.movie-grid-list');
// const btnAddToWatched = document.querySelector(".btn-add-watched");
// const btnAddToQueue = document.querySelector(".card__button-text");
const btnGetToWatched = document.querySelector('[data-action ="watched"]');
const btnGetToQueue = document.querySelector('[data-action ="queue"]');



// btnAddToWatched.addEventListener("click", addWatchedMoviesInStorage);
// btnAddToQueue.addEventListener("click", addQueueMoviesInStorage);
btnGetToWatched.addEventListener("click", getWatchedMoviesInStorage);
btnGetToQueue.addEventListener("click", getQueueMoviesInStorage);

const warningTextUa = "Нажаль тут ще не має жодного фільму.  Тому спеціально для тебе ми підібрали найпопулярніші фільми. Приємного переглядцу!"
const warningTextEng = " Unfortunately, there is no movie here yet.Therefore, we have selected the most popular movies especially for you.Happy viewing!"

const KEY_WATCHED = "watched-movies-in-storage";
const KEY_QUEUE = "queue-movies-in-storage";
const moviesWatchedInLocal = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
const moviesQueueInLocal = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];


export function getWatchedMoviesInStorage() {
  console.log("click");
    const markup = moviesWatchedInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        // const properTitle = makeMovieTitle(item);
      let properGenre = item.genres;
    //     if (properGenre.length === 0) {
    //       console.log(properGenre.length);
    //     properGenre = 'No info';
    //   }
        properGenre.length === 0 ? properGenre = 'No info' : properGenre;
    
      if (item.poster_path) {
        return `<li class="grid-movie-card" id="${item.id}">
      <div class="movie-item">
      <div class="img-wrapper">
        <img class="movie-img"
        src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.title}"
        loading="lazy" />
        </div>
        <div class="movie-info-wrapper">
          <div class="movie-info">
            <h3 class="movie-title">${item.original_title}</h3>
            <ul class="thumb">
              <li class="movie-genre">${properGenre}</li>
              <li class="movie-date">| ${dateMarkup}</li>
              <li class="movie-rating">${voteMarkup}</li>
            </ul>
          </div>
        </div>
      </div>
    </li>`;
      } else {
        return `<li class="grid-movie-card" id="${item.id}>
      <div class="movie-item">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
      }
    })
    .join('');
  moviesListContainer.innerHTML = markup;
}

export function getQueueMoviesInStorage() {
        const getData = moviesQueueInLocal;
        console.log("getData", getData);
    console.log(JSON.parse(getData.length));
    
   if (getData.length >= 1) {const markup = moviesQueueInLocal.map(item => {
        const dateMarkup = getYear(item.release_date);
        const voteMarkup = getRating(item.vote_average);
        let properGenre = item.genres;
    
        properGenre.length === 0 ? properGenre = 'No info' : properGenre;
    
      if (item.poster_path) {
        return `<li class="grid-movie-card" id="${item.id}">
      <div class="movie-item">
      <div class="img-wrapper">
        <img class="movie-img"
        src="http://image.tmdb.org/t/p/w500${item.poster_path}" 
        alt="${item.title}"
        loading="lazy" />
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
      } else {
        return `<li class="grid-movie-card" id="${item.id}>
      <div class="movie-item">
      <div class="img-wrapper img-placeholder">
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${item.original_title}</h3>
          <ul class="thumb">
            <li class="movie-genre">${properGenre}</li>
            <li class="movie-date">| ${dateMarkup}</li>
            <li class="movie-rating">${voteMarkup}</li>
          </ul>
        </div>
      </div>
    </li>`;
      }
    })
    .join('');
       moviesListContainer.innerHTML = markup;
   } else {
     moviesContainer.innerHTML =  `<p>${warningTextUa}</p>
                                   <p> ${warningTextEng}</p>
                                   <button class="nav-btn" data-btn-home="">
                                   <a href="/index.html">the best here</a>
                                   </button>`;
  }
}

function getYear(date) {
  const dateArr = date.split('-');
  return dateArr[0];
}

function getRating(vote) {
    const voteAdapted = vote.toFixed(2);
    return voteAdapted;
}


export function addWatchedMoviesInStorage() {
    const localStorageArr = localStorage.getItem(KEY_WATCHED) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesWatchedInLocal.push(filmObject);
    console.log("In if",moviesWatchedInLocal);

        localStorage.setItem(KEY_WATCHED, JSON.stringify(moviesWatchedInLocal));
        // localStorage.clear();
       getWatchedMoviesInStorage();
    }
    // else {
    //   alert("Ти вже переглянув цей фільм");
    // }
    return 
}

export function addQueueMoviesInStorage() {
    const localStorageArr = localStorage.getItem(KEY_QUEUE) || [];
    console.log("Before",localStorageArr);
    if (!localStorageArr.includes(filmObject.id)) {
    moviesQueueInLocal.push(filmObject);
    console.log("In if",moviesQueueInLocal);

        localStorage.setItem(KEY_QUEUE, JSON.stringify(moviesQueueInLocal));
        // localStorage.clear();
    getQueueMoviesInStorage();
    }
    // else {
    //   alert("Фільм вже у черзі на перегляд");
    // }
    return 
}




const dateSt = {
  adult: false,
  backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
  belongs_to_collection: { id: 531330, name: 'Top Gun Collection', poster_path: '/pG4LGdxjNBHbsjMKnPWtkRSJcUv.jpg', backdrop_path: '/eNupRRVv0a4dkVTxOMvG7LhNBaq.jpg' },
  budget: 170000000,
  genres:[{ id: 28, name: 'Action' },
    { id: 18, name: 'Drama' }],
  homepage: "https://www.topgunmovie.com",
  id: 361743,
  imdb_id: "tt1745960",
};

function findGenres(dateSt) {
  console.log(dateSt);
  console.log(dateSt.genres);
  const genresP = dateSt.genres;
  console.log(genresP);
  const genrArr = genresP.map(genr => genr.name)
 
console.log(genrArr);
  
}
findGenres(dateSt);

const findGenre = moviesQueueInLocal.map(item => {
        // const dateMarkup = getYear(item.release_date);
        // const voteMarkup = getRating(item.vote_average);
        // let properGenre = item.genres;
         console.log(dateSt.genres);
         console.log("Object", Object.values(dateSt.genres));
  // const genresK = Object.values(filmObject.genres);
  // console.log("Object ganr", Object.values(genresK));
    })
  .join('');
// { adult: false,
// backdrop_path: "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
// genres: [28, 18],
// id: 361743,
// media_type: "movie",
// original_language: "en",
// original_title: "Top Gun: Maverick",
// overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
// popularity: 4724.785,
// poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
// release_date: "2022-05-24",
// title: "Top Gun: Maverick",
// video: false,
// vote_average: 8.372,
// vote_count: 3025,
// }

// {adult: false,
// backdrop_path: "/lbLPVvgq16BD3IA6sIH3riu9ouO.jpg",
// genres: [27, 9648, 878, 53],
// id: 762504,
// media_type: "movie",
// original_language: "en",
// original_title: "Nope",
// overview: "Residents in a lonely gulch of inland California bear witness to an uncanny, chilling discovery.",
// popularity: 1419.195,
// poster_path: "/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",
// release_date: "2022-07-20",
// title: "Nope",
// video: false,
// vote_average: 7.094,
// vote_count: 830}
//

// console.log(moviesQueueInLocal);

// library.html
// додав обгортку div wrapper

// закоментував
// heder.scss
// .heder {
    // margin-left: auto;
  // margin-right: auto;
// }

// додав
// body.scss
// body {
//     height: 100%;
//     line-height: 1;
// }
// .wraper {
//     min-height: 100%;
//     display: flex;
//     flex-direction: column;
// }

// main {
// flex: 1 1 auto;
// }





/////////////////////////


import { getMovieByID } from './MovieObjectByID';
import {
  getWatchedMoviesInStorage,
  getQueueMoviesInStorage,
} from './myLibraryPage';

const openModalCard = document.querySelector('[data-modalCard-open]');
const closeModalCard = document.querySelector('[data-modalCard-close]');
const modalCardCont = document.querySelector('[data-modalCard]');
const backdrop = document.querySelector('[backdrop]');
const cardContMarking = document.querySelector('.card__cont-marking');
const cardTableContainer = document.querySelector('.card__table');
const addToWatchedButton = document.querySelector('[data-add-to-watched]');
const addToQueueButton = document.querySelector('[data-add-to-queue]');

openModalCard.addEventListener('click', onOpenModalCard);
closeModalCard.addEventListener('click', onCloseModalCard);
modalCardCont.addEventListener('click', onBackModalDropClick);
window.addEventListener('keydown', onEscClick);
window.removeEventListener('keydown', onEscClick);


const KEY_WATCHED = 'watched-movies-in-storage';
const KEY_QUEUE = 'queue-movies-in-storage';

function onCloseModalCard() {
  modalCardCont.classList.add('no-activ');
  const htmlEl = document.getElementsByTagName('HTML')[0];
  htmlEl.classList.remove('no-scroll');
  cardContMarking.innerHTML = '';
  cardTableContainer.innerHTML = '';
}

function onBackModalDropClick(evt) {
  if (!evt.target.classList.contains('card__cont')) {
    return;
  }
  onCloseModalCard.re();
}

function onEscClick(evt) {
  if (evt.key === 'Escape') {
    onCloseModalCard();
    backdrop.classList.add('is-hidden');
  }
}

// function onAddWatchClick(evt) {
//   if (evt.key === 'Escape') {
//     onCloseModalCard();
//     backdrop.classList.add('is-hidden');
//   }
// }
function onOpenModalCard(event) {
  if (event.target.classList.contains('grid-movie-card')) {
    const filmID = event.target.attributes.id.value;

    addToQueueButton.classList.remove('card-buton-change')
    addToWatchedButton.classList.remove('card-buton-change')

    getMovieByID(filmID).then(res => cardMarkUp(res));

    modalCardCont.classList.remove('no-activ');
    const htmlEl = document.getElementsByTagName('HTML')[0];
    htmlEl.classList.add('no-scroll');
  }
  return;
}

function cardMarkUp(filmObject) {
  // checkMovieByIdWatched(filmObject, KEY_WATCHED);
  // checkMovieByIdQueue(filmObject, KEY_QUEUE); 
  const markUPImg = `<img class="card__img" src="http://image.tmdb.org/t/p/w500${filmObject.poster_path}" alt="${filmObject.title}" />`;
  cardContMarking.insertAdjacentHTML('afterbegin', markUPImg);
  const trimMarkupVote = trimMarkup(filmObject.vote_average);
  const trimMarkupPopular = trimMarkup(filmObject.popularity);

  let markupGenre = filmObject.genres;
  let cardGenre = markupGenre.map(genr => genr.name);

  const markUp = `<h1 class="card__table-heder">${filmObject.title}</h1>
      <table class="card__table">
        <tr class="card__table-vote">
          <td class="card__table-name ">Vote / Votes</td>
          <td class="card__table-value "><span class="average">${trimMarkupVote}</span> / <span class="vote">${filmObject.vote_count}</span></td>
        </tr>
        <tr class="card__table-popularity">
          <td class="card__table-name">Popularity</td>
          <td class="card__table-value">${trimMarkupPopular}</td>
        </tr>
        <tr class="card__table-title">
          <td class="card__table-name">Original Title</td>
          <td class="card__table-value">${filmObject.title}</td>
        </tr>
        <tr class="card__table-genre">
          <td class="card__table-name last-child">Genre</td>
          <td class="card__table-value last-child">${cardGenre}</td>
        </tr>
      </table>
      <div class="card__about">
        <h2 class="card__about-heder">About</h2>
        <p class="card__about-text">${filmObject.overview}</p>
      </div>`;
  cardTableContainer.insertAdjacentHTML('afterbegin', markUp);
  addToWatchedButton.addEventListener('click', addWatchedMoviesInStorage);
  addToQueueButton.addEventListener('click', addQueueMoviesInStorage);
}

export function addWatchedMoviesInStorage(filmObject) {
  const locSt = localStorage.getItem(KEY_WATCHED);
  const localStorageArr = locSt || [];
  const parsedArr = JSON.parse(localStorage.getItem(KEY_WATCHED)) || [];
  console.log(parsedArr, 'распасеный массив watch');
  if (!localStorageArr.includes(filmObject.id)) {
    parsedArr.push(filmObject);
    localStorage.setItem(KEY_WATCHED, JSON.stringify(parsedArr));
    addToWatchedButton.removeEventListener('click',
      addWatchedMoviesInStorage
  );
  }
 
}
export function addQueueMoviesInStorage(filmObject) {
  const locSt = localStorage.getItem(KEY_QUEUE);
  const localStorageArrq = locSt || [];
  const parsedArrq = JSON.parse(localStorage.getItem(KEY_QUEUE)) || [];
  console.log(parsedArrq, 'распасеный массив queue');
  if (!localStorageArrq.includes(filmObject.id)) {
    parsedArrq.push(filmObject);
    localStorage.setItem(KEY_QUEUE, JSON.stringify(parsedArrq));
      addToQueueButton.removeEventListener('click',
      addQueueMoviesInStorage
    );
  }
  
}
function trimMarkup(trim) {
  const trimMarkup = trim.toFixed(1);
  return trimMarkup;
}

// function checkMovieByIdWatched(movie, key) {
//   const lockalStorageId = JSON.parse(localStorage.getItem(key)) || [];
//   console.log(lockalStorageId, 'Просмотренные фильмы');
//   const includesMovie = lockalStorageId.find(elem => elem.id === movie.id);
//   console.log(includesMovie, 'нука');
//   if (!includesMovie) {
//     addToWatchedButton.addEventListener('click', () =>
//       addWatchedMoviesInStorage(movie)
//     );
//     addToWatchedButton.textContent = 'Add to watched';
//   } else if (includesMovie) {
//     addToWatchedButton.addEventListener('click', () =>
//       removeMovieFromWatched(movie, key)
//     );
//     addToWatchedButton.textContent = 'Remove from watched';
//   }
// }
// function checkMovieByIdQueue(movie, key) {
//   const lockalStorageId = JSON.parse(localStorage.getItem(key)) || [];
//   console.log(lockalStorageId, 'Просмотренные фильмы');
//   const includesMovie = lockalStorageId.find(elem => elem.id === movie.id);

//   if (!includesMovie) {
//     console.log(lockalStorageId.includes(includesMovie));
//     addToQueueButton.addEventListener('click', () =>
//       addQueueMoviesInStorage(movie)
//     );
//     addToQueueButton.textContent = 'Add to queue';
//   } else if (includesMovie) {
//     addToQueueButton.addEventListener('click', () =>
//       removeMovieFromQueue(movie, key)
//     );
//     addToQueueButton.textContent = 'Remove from queue';
//   }
// }

function removeMovieFromWatched(movie) {
  const localStorageArr = JSON.parse(localStorage.getItem(KEY_WATCHED));
  const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
  if (includesMovie) {
    const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
    localStorage.setItem(KEY_WATCHED, JSON.stringify(updatedArr));
  }

  getWatchedMoviesInStorage();
}

function removeMovieFromQueue(movie) {
  const localStorageArr = JSON.parse(localStorage.getItem(KEY_QUEUE));
  const includesMovie = localStorageArr.find(elem => elem.id === movie.id);
  if (includesMovie) {
    const updatedArr = localStorageArr.filter(elem => elem.id !== movie.id);
    localStorage.setItem(KEY_QUEUE, JSON.stringify(updatedArr));
  }

  getQueueMoviesInStorage();
}


// Dynamic changing text-content on modal buttons 

addToQueueButton.addEventListener('click', () => {
  if (addToQueueButton.textContent == "Remove from queue") {
    addToQueueButton.textContent = "Removed from Queue"
    addToQueueButton.classList.add('card-buton-change')
  }
  if (addToQueueButton.textContent == "Add to queue") {
    addToQueueButton.textContent = "Added to Queue"
    addToQueueButton.classList.add('card-buton-change')
  }
});

addToWatchedButton.addEventListener('click', () => {
  if (addToWatchedButton.textContent == "Remove from watched") {
    addToWatchedButton.textContent = "Removed from watched"
    addToWatchedButton.classList.add('card-buton-change')
    
  }
  if (addToWatchedButton.textContent == "Add to watched") {
    addToWatchedButton.textContent = "Added to Watched"
    addToWatchedButton.classList.add('card-buton-change')
  }
});