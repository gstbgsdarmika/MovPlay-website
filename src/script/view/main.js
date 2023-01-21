import '../component/search-bar.js';
import $ from "jquery";

const main = () => {
    // API 
    const APIKey = 'api_key=06bdc206f999f49cc824f9038b3382dd';
    const BaseURL = 'https://api.themoviedb.org/3';
    const API_URL = BaseURL + '/discover/movie?sort_by=popularity.desc&'+APIKey;
    const ImageURl = 'https://image.tmdb.org/t/p/w500';
    const searchURL = BaseURL + '/search/movie?'+APIKey;
    const genreMovie = document.getElementById('genres');
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
    ] ;
    
    const navbarShadowRoot = document.getElementsByTagName('search-bar');
    const formElement = navbarShadowRoot[0].shadowRoot.getElementById('searchForm');
    const searchElement = navbarShadowRoot[0].shadowRoot.getElementById('search');

    let newUrl = '';
    let selectedGenre = [];

    
    const setGenre = () => {
        $('#genres').html(``);
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
                getMovies(API_URL + '&with_genres=' +encodeURI(selectedGenre.join(','))) 
                highlightSelection()
            });
            genreMovie.append(tagGenre);
        });
    }
    setGenre();

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

    const getMovies = (url) => {
        newUrl = url;
        fetch(url)
        .then((res) => res.json()) .then((data) =>{
        showMovies(data.results);
        if(data.results.length !== 0){
            showMovies(data.results);
        } else {
            $("#movies").html(
                `<h1 class="no-movie">Sorry, Movies not found!</h1>`
            );
            $("#pageSection").css("display", "none");
        }
        });
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

    const showMovies = (data) => {
        $("#movies").html(``);
        data.forEach((movie) => {
            const {title, poster_path, vote_average} = movie;
            $("#movies").append(`
            <div class="card-movie">
                <img src="${ImageURl+poster_path}" alt="${title}">
                <div class="info-movie">
                    <p class="title-movie">${title}</p>
                    <button class="${getColor(vote_average)}">${vote_average}</button>
                </div>
            </div>
            `);
        })
    };
    getMovies(API_URL);

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchTerm = searchElement.value;
        selectedGenre = [];
        setGenre();
        if(searchTerm){
            getMovies(`${searchURL}&query=${searchTerm}`);
        } else{
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
};

export default main;