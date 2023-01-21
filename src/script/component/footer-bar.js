class Footer extends HTMLElement {
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

            a{
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

            #footer {
                padding-top: 100px;
                padding-bottom: 30px;
            }

            .footerAddr {
                display: flex;
                flex-direction: column;
                flex-basis: 30%;
            }

            .logoFooter img {
                width: 70%;
            }

            .sosial-media {
                display: flex;
                color : #fff;
            }

            .sosial-media i{
                color : #fff;
                with: 30px;
            }
            .sosial-media img{
                width: 100%;
                margin-top: 20px;
                padding-right: 10px;
            }

            .download-app  {
                display: flex;
            }

            .download-app img {
                width: 100%;
                padding-top: 20px;
                padding-right: 20px;
            }

            .footerLink  {
                display: flex;
                position: relative;
                left: 150px;
                bottom: -50px;
                margin: 0 auto;
                flex-basis: 70%;
            }

            .footerNav {
                display: flex;
                flex-flow: row wrap;
                
            }

            .footerItem {
                margin-right: 70px;
            }

            .footer li {
                line-height: 2em;
            }

            .footerTitle {
                color: #EDA10F;
            }

            .legal {
                padding-top: 30px;
                text-align: center;
                color: #EDA10F;
            }

            .legal hr{
                border: 1px solid #EDA10F;
                margin-bottom: 30px;
                margin-top: 80px;
            }
        </style>

            <footer id="footer">
                <div class="container">
                    <div class="flex-column">
                        <div class="flex-row">
                            <div class="footerAddr content">
                                <div class="logoFooter">
                                    <a href="index.html" class="logo">Mov<span class="color-acsent2">Play</span></a>
                                </div>
                                <p>To get the latest information about us, you can visit our social media accounts</p>
                                <div class="sosial-media">
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div class="download-app"></div>
                            </div>
                            <div class="footerLink content">
                                <ul class="footerNav"> 
                                    <li class="footerItem">
                                        <h3 class="footerTitle">Support</h3>
                                        <ul class="footerUl">
                                            <li>
                                                <a href="#">Privacy & Policy</a>
                                            </li>
                                            <li>
                                                <a href="#">Term & Conditions</a>
                                            </li>
                                            <li>
                                                <a href="#">Support System</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footerItem">
                                        <h3 class="footerTitle">Our Services</h3>
                                        <ul class="footerUl">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Design Services</a>
                                            </li>
                                            <li>
                                                <a href="#">API Services</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="footerItem">
                                        <h3 class="footerTitle">Contact Us</h3>
                                        <ul class="footerUl">
                                            <li>
                                                <a href="#">Help</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="legal">
                    <hr>
                    <p>Copyright © 2022 All Rights Reserved By TahapanBelajar.Id</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-bar', Footer);