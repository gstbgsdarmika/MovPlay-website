//TMDB
const APIKey = 'api_key=06bdc206f999f49cc824f9038b3382dd';
const BaseURL = 'https://api.themoviedb.org/3';
const API_URL = BaseURL + '/discover/movie?sort_by=popularity.desc&'+APIKey;
const ImageURl = 'https://image.tmdb.org/t/p/w500';
const releaseDates = BaseURL + '/release_dates?' +APIKey;
const searchURL = BaseURL + '/search/movie?'+APIKey;
const genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
] 

const movies = document.getElementById('movies');
const genreMovie = document.getElementById('genres');
const searchForm = document.getElementById('searchForm');
const search = document.getElementById('search');

let selectedGenre = []

setGenre();
function setGenre(){
    genreMovie.innerHTML = '';
    genres.forEach(genre => {
        const tagGenre = document.createElement('div');
        tagGenre.classList.add('genre');
        tagGenre.id=genre.id;
        tagGenre.innerText = genre.name;
        tagGenre.addEventListener('click', ()=>{
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            } else {
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id,idx) =>{
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1);
                        }
                    })
                } else {
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMovies(API_URL + '&with_genres=' +encodeURI(selectedGenre.join(','))) 
            highlightSelection()
        })
        genreMovie.append(tagGenre);
    })
}

function highlightSelection(){
    const tagsGenre = document.querySelectorAll('.genre');
    tagsGenre.forEach(tag=> {
        tag.classList.remove('highlight')
    })
    clearBTn()
    if(selectedGenre.length !=0){
        selectedGenre.forEach(id => {
            const highlightedTag = document.getElementById(id);
            highlightedTag.classList.add('highlight');
        })
    }
}

function clearBTn(){
    let clearBTn = document.getElementById('clear');
    if(clearBTn){
        clearBTn.classList.add('highlight');
    } else {
        let clear = document.createElement('div');
        clear.classList.add('genre', 'highlight');
        clear.id = 'clear';
        clear.innerText = 'Clear x';
        clear.addEventListener('click', () => {
            selectedGenre = [];
            setGenre();
            getMovies(API_URL);
        })
        genreMovie.append(clear);
    }
}

getMovies(API_URL);
function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showMovies(data.results);
        } else {
            movies.innerHTML = '<h1 class="no-results">No Results Found</h1>'
        }
    })
}

function showMovies(data){
    movies.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, release_dates, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('card-movie');
        movieEl.innerHTML = `
        <img src="${ImageURl+poster_path}" alt="${title}">
        <div class="info-movie">
            <p class="title-movie">${title}</p>
            <button class="${getColor(vote_average)}">${vote_average}</button>
        </div>
        `
        movies.appendChild(movieEl);
    })
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searhTerm = search.value;
    selectedGenre = [];
    setGenre();
    if(searhTerm){
        getMovies(searchURL+'&query='+searhTerm)
    } else {
        getMovies(API_URL); 
    }
})

function getColor(vote){
    if(vote>=8){
        return 'rate-green'
    } else if(vote>= 5){
        return "rate-orange"
    } else {
        return 'rate-red'
    }
}

// ubah navbar jika di scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('navbar-scroll', window.scrollY > 0);
    
})

// Navbar Active
var navbarActive = document.getElementById("navbar");
var active = navbarActive.getElementsByClassName("navbar-link");
for(var i = 0; i<active.length; i++){
    active[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("navbar-active");
        current[0].className = current[0].className.replace(" navbar-active")
        this.className += " navbar-active"
    });
}

// navbar humburger
const menu = document.querySelector(".navbar-menu");
const menuBtn = document.querySelector("#open-menu-navbar");
const closeBtn = document.querySelector("#close-menu-navbar");

// show navbar menu 
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// close navbar menu
const closeNavbar =() =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNavbar);