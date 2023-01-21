class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .description {
                text-align: center;
                justify-content: center;
                margin-top: 150px;
                margin-bottom: -100px;
            }
            
            .description p{
                font-size: 18px;
                line-height: 5px;
            }

            h1{
                font-size: 2.5rem;
                color: #EDA10F;
            }

            .search-bar{
            width: 100%;
            max-width: 580px;
            background-color: #20212B;
            border-radius: 20px;
            display: flex;
            align-items: center;
            padding: 6px 25px;
            margin: 50px auto;
            }

            .search-bar input {
                background-color: transparent;
                flex: 1;
                border: 0;
                outline: none;
                font-size: 18px;
                color: #CBC8C8;
            }

            .placeholder {
                background-color: transparent;
            }

            .search-bar button {
                border: 0;
                cursor: pointer;
                background-color: #20212B;
            }
        </style>
        <div class="description">
            <h1>All the movies you want, in one place</h1>
                <p>Find the type of movie you want to watching</p>
                <form class="search-bar" id="searchForm">
                    <input type="text" placeholder="Search.." id="search" name="search">
                    <button type="submit">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.375 12.1875C24.375 14.877 23.502 17.3613 22.0312 19.377L29.4492 26.8008C30.1816 27.5332 30.1816 28.7227 29.4492 29.4551C28.7168 30.1875 27.5273 30.1875 26.7949 29.4551L19.377 22.0312C17.3613 23.5078 14.877 24.375 12.1875 24.375C5.45508 24.375 0 18.9199 0 12.1875C0 5.45508 5.45508 0 12.1875 0C18.9199 0 24.375 5.45508 24.375 12.1875ZM12.1875 20.625C16.8457 20.625 20.625 16.8457 20.625 12.1875C20.625 7.5293 16.8457 3.75 12.1875 3.75C7.5293 3.75 3.75 7.5293 3.75 12.1875C3.75 16.8457 7.5293 20.625 12.1875 20.625Z" fill="#EDA10F"/>
                        </svg>
                    </button>
                </form>
        </div>
        `;
        this.shadowDOM.querySelector('#search').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);
