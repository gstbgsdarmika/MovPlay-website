class Navbar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                text-decoration: none;
                list-style: none;
                box-sizing: border-box;
            }
            
            html{
                scroll-behavior: smooth;
            }
            
            body{
                font-family:'Poppins', sans-serif;
                background-color:#100F17 ;
                color: #fff;
                line-height: 1.7;
                overflow-x: hidden;
            }
            
            img {
                width: 100%;
                display: block;
                object-fit: cover;
            }
            
            h1,h2,h3,h4,h5{
                line-height: 1.2;
            }
            
            h1{
                font-size: 2.5rem;
                color: #EDA10F;
            }
            
            h2 {
                font-size: 2rem;
                color: #EDA10F;
            }
            
            a {
                color: #fff;
            }

            .logo {
                font-size: 2rem;
                font-weight: 600;
            }

            .color-acsent{
                color: #fff;
            }

            .color-acsent2{
                color: #EDA10F;
            }
            
            .container{
                width: 80%;
                margin: 0 auto;
            }
            
            .flex-column {
                display: flex;
                flex-direction: column;
            }
            
            .flex-row {
                display: flex;
                flex-direction: row;
                flex-grow: 1;
            }
            
            .content{
                flex-basis: 50%;
            }
            
            nav {
                background-color:#20212B ;
                box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.1);
                width: 100vw;
                height: 5rem;
                position: fixed;
                top: 0;
                z-index: 10;
            }

            nav button{
                display: none;
            }

            .navbar-container{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .navbar-menu{
                display: flex;
                gap: 4rem;
                align-items: center;
            }

            .navbar-active::after{
                content: '';
                display: block;
                font-weight: 500;
                border-bottom: 5px solid #EDA10F;
                width: 50%;
                margin: auto;
                padding-bottom: 5px;
                margin-bottom: -8px;
            }

            .navbar-link:hover::after {
                content: '';
                display: block;
                border-bottom: 5px solid #EDA10F;
                width: 50%;
                margin: auto;
                padding-bottom: 5px;
                margin-bottom: -8px;
            }

            .navbar-scroll{
                background-color:#20212B ;
                box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.1);
            }

            .btn1{
                background-color: #EDA10F;
                color: #fff;
                font-size: 1rem;
                font-weight: 600;
                border-radius: 20px;
                padding: 8px 30px;
            }

            .btn1:hover{
                border: 2px solid #EDA10F ;
                background-color: #F6F5F3;
                color: #EDA10F;
            }
        </style>
        
        <nav id="navbar">
            <div class="container navbar-container">
                <a href="index.html" class="logo">Mov<span class="color-acsent2">Play</span></a>
                    <ul class="navbar-menu">
                        <li><a class="navbar-link navbar-active" href="#">HOME</a></li>
                        <li><a class="navbar-link" href="#genres">GENRES</a></li>
                        <li><a class="navbar-link" href="#list-movie">MOVIES</a></li>
                        <li><a class="navbar-link" href="#footer">CONTACT</a></li>
                        <li><a class="btn1" href="#daftar">SIGN IN</a></li>
                    </ul>
                <button id="open-menu-navbar"><i class="fa-solid fa-bars"></i></button>
                <button id="close-menu-navbar"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </nav>        
        `;
    }
}

customElements.define('nav-bar', Navbar);