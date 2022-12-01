import React from 'react'
import { Link } from 'react-router-dom'
import FacebookLogo from '../../assets/facebook.png'
import InstagramLogo from '../../assets/instagram.png'
import GitHubLogo from '../../assets/github.png'

import Button from '../../shared/Button'

function HomePage(){
    return(
        <div className={"page home-page"}>
            <div className="erasmus-titles">
                <h1>Erasmus+</h1>
                <h3>Colegiul Vasile Lovinescu</h3>
                <h5>Proiect Erasmus+, nr. 2020-1-RO01-KA102-078817, Tehnologiile IT în specializările VET</h5>
            </div>
            <div className='erasmus-photos'>
                <img src={require('../../assets/erasmus-photos.png')} alt=''/>
            </div>
            <div className="erasmus-about">
                <div className='arrow-svg'>
                    <svg viewBox="0 0 614 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 94.3117C36.3571 31.8011 123.953 -62.2099 191.477 61.8307C275.883 216.881 171.617 192.98 153.562 151.919C135.508 110.859 103.912 1.77155 237.968 12.8028C372.024 23.8341 302.265 115.787 364 151.919C426.5 188.5 439.274 81.4418 497.5 61.8307C544.081 46.1418 584 94.3117 613 124M613 124L597.5 73M613 124L559.5 111" stroke="#0F0D0D"/>
                    </svg> 
                </div>  
                <div className="erasmus-text">
                   <h2>Erasmus+ este programul Uniunii Europene în domeniile educației, formării, tineretului și sportului pentru perioada 2021-2027, fiind gestionat de Comisia Europeană.</h2>
                   <ul className="list-1">
                       <h3>OBIECTIVUL GENERAL</h3>
                       <p>Obiectivul general al programului este de a sprijini, prin învățarea pe tot parcursul vieții, dezvoltarea educațională, personală și profesională a persoanelor care își desfășoară activitatea în domeniul educației, formării, tineretului și sportului, atât în Europa, cât și în afara ei, contribuind astfel la o creștere economică durabilă, la crearea de locuri de muncă de calitate, la coeziunea socială, la stimularea inovării și la consolidarea identității europene și a cetățeniei active.</p>
                   </ul>
                   <ul className="list-2">
                       <h3>PRIORITĂȚILE PROGRAMULUI ERASMUS</h3>
                       <li>Incluziune şi diversitate</li>
                       <li>Transformarea digitală</li>
                       <li>Participarea la viața democratică, valorile comune și angajamentul civic</li>
                       <li>Mediul şi combaterea schimbărilor climatice</li>
                    </ul>
                </div>
                <div className="image-on-the-right">
                    <img src={require("../../assets/erasmus-photo-about.jpg")} alt="aboutImage"/>
                </div>
            </div>
            <div className="svgs">
                <div className="arrows-background">
                <div className="arrow">
                    <svg viewBox="0 0 72 351" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.2012 0V175.602V346M36.2012 346L2 245.409M36.2012 346L70 245.409" stroke="#050202" stroke-width="3"/>
                    </svg>  
                </div>
                <svg className="svg-right" viewBox="0 0 336 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M318.5 51L319.811 51.7285L319.811 51.7285L318.5 51ZM320 32.5C320 36.9183 323.582 40.5 328 40.5C332.418 40.5 336 36.9183 336 32.5C336 28.0817 332.418 24.5 328 24.5C323.582 24.5 320 28.0817 320 32.5ZM0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM50.4066 22.0712C53.2568 21.2686 59.1836 21.6681 67.0476 26.4018C74.8696 31.1103 84.4946 40.0506 94.6295 56.0443L97.1636 54.4385C86.8484 38.1603 76.9141 28.8393 68.5948 23.8316C60.3176 18.8491 53.5212 18.0775 49.5934 19.1835L50.4066 22.0712ZM117.407 29.4959C120.257 28.6933 126.184 29.0928 134.048 33.8265C141.87 38.535 151.495 47.4753 161.63 63.469L164.164 61.8632C153.848 45.585 143.914 36.264 135.595 31.2563C127.318 26.2738 120.521 25.5022 116.593 26.6082L117.407 29.4959ZM175.407 32.4959C178.257 31.6933 184.184 32.0928 192.048 36.8265C199.87 41.535 209.495 50.4753 219.63 66.469L222.164 64.8632C211.848 48.585 201.914 39.264 193.595 34.2563C185.318 29.2738 178.521 28.5022 174.593 29.6082L175.407 32.4959ZM233.407 39.4959C236.257 38.6933 242.184 39.0928 250.048 43.8265C257.87 48.535 267.495 57.4753 277.63 73.469L280.164 71.8632C269.848 55.585 259.914 46.264 251.595 41.2563C243.318 36.2738 236.521 35.5022 232.593 36.6082L233.407 39.4959ZM117.974 53.7764C118.391 51.5566 120.262 48.5823 123.348 45.4043C126.385 42.2769 130.424 39.1297 134.856 36.5459C139.291 33.9597 144.055 31.9745 148.536 31.1138C153.028 30.2509 157.089 30.5432 160.272 32.3114L161.728 29.6889C157.711 27.457 152.859 27.2285 147.97 28.1677C143.07 29.109 137.984 31.2488 133.344 33.9543C128.701 36.662 124.44 39.9732 121.196 43.3144C118 46.6052 115.609 50.11 115.026 53.2236L117.974 53.7764ZM118.478 54.2566C118.899 51.8313 120.776 48.6322 123.822 45.2446C126.828 41.9021 130.823 38.5424 135.201 35.7859C139.585 33.026 144.287 30.9122 148.701 29.9968C153.122 29.0799 157.104 29.3915 160.228 31.2657L161.772 28.693C157.777 26.2968 152.947 26.0524 148.092 27.0593C143.23 28.0677 138.192 30.3577 133.603 33.2472C129.008 36.14 124.796 39.6751 121.592 43.2385C118.428 46.7569 116.09 50.4748 115.522 53.7434L118.478 54.2566ZM53.4779 48.2566C53.8991 45.8313 55.7758 42.6322 58.8223 39.2446C61.8283 35.9021 65.8232 32.5424 70.2014 29.7859C74.5851 27.026 79.2872 24.9122 83.701 23.9968C88.1218 23.0799 92.104 23.3915 95.2284 25.2657L96.7716 22.693C92.7769 20.2968 87.9468 20.0524 83.0917 21.0593C78.2296 22.0677 73.1924 24.3577 68.6031 27.2472C64.0083 30.14 59.7964 33.6751 56.5917 37.2385C53.4275 40.7569 51.0897 44.4748 50.5221 47.7434L53.4779 48.2566ZM173.478 61.2566C173.899 58.8313 175.776 55.6322 178.822 52.2446C181.828 48.9021 185.823 45.5424 190.201 42.7859C194.585 40.026 199.287 37.9122 203.701 36.9968C208.122 36.0799 212.104 36.3915 215.228 38.2657L216.772 35.693C212.777 33.2968 207.947 33.0524 203.092 34.0593C198.23 35.0677 193.192 37.3577 188.603 40.2472C184.008 43.14 179.796 46.6751 176.592 50.2385C173.428 53.7569 171.09 57.4748 170.522 60.7434L173.478 61.2566ZM236.478 66.2566C236.899 63.8313 238.776 60.6322 241.822 57.2446C244.828 53.9021 248.823 50.5424 253.201 47.7859C257.585 45.026 262.287 42.9122 266.701 41.9968C271.122 41.0799 275.104 41.3915 278.228 43.2657L279.772 40.693C275.777 38.2968 270.947 38.0523 266.092 39.0593C261.23 40.0677 256.192 42.3577 251.603 45.2472C247.008 48.14 242.796 51.6751 239.592 55.2385C236.428 58.7569 234.09 62.4748 233.522 65.7434L236.478 66.2566ZM297.054 66.499C302.088 66.3192 313.488 63.1106 319.811 51.7285L317.189 50.2715C311.512 60.4894 301.245 63.3474 296.946 63.501L297.054 66.499ZM319.811 51.7285C325.817 40.9184 328.689 34.8164 329.393 33.0571L326.607 31.9429C325.978 33.5169 323.183 39.4816 317.189 50.2715L319.811 51.7285ZM39.0544 39.501C34.7659 39.3455 24.4974 36.4486 18.8159 26.0646L16.1841 27.5046C22.5026 39.0529 33.9008 42.3161 38.9456 42.499L39.0544 39.501ZM18.8159 26.0646C12.8214 15.1086 10.0261 9.05064 9.39561 7.45021L6.60439 8.54979C7.30725 10.334 10.1786 16.5283 16.1841 27.5046L18.8159 26.0646Z" fill="black"/>
                </svg>     
                </div>
            </div>
            <div className='vectors-background'>

            </div>
            <div className='background-vectors'>
            <div className="erasmus-cards">
                <div className="text">
                    <h3>Vocabulare dezvoltate cu grija</h3>
                    <p id="subtext">O serie de Vocabulare dezvoltate si actualizate periodic de Colegiul Vasile Lovinescu, o invatare cursiva si cu lectii de calitate.</p>
                </div>
                <div className="cards">
                    <div className="card-spanish">
                        <img src={require("../../assets/cover-course-1.jpg")} alt="coverimg1"/>
                        <h4 id="title-course">Vocabular pentru Spaniola</h4>
                        <p id="course-subtext">Învățați spaniola din cursurile noastre online gratuite de mai jos. Învățați conversații spaniole de bază, vocabular și multe altele.</p>
                        <Link to='/courses/spanish'>
                            <Button className="class-1" />
                        </Link>
                    </div>
                    <div className="card-english">
                        <img src={require("../../assets/cover-course-2.jpg")} alt="coverimg2"/>
                        <h4 id="title-course">Vocabular pentru Engleza</h4>
                        <p id="course-subtext">Învățați gratuit limba engleză din cursurile noastre online de mai jos. Învățați conversația de bază în limba engleză, vocabularul și multe altele.</p>
                        <Link to='/courses/english'>
                            <Button className="class-2" />
                        </Link>
                    </div>
                    <Link to="/courses" className="card-more">
                        <svg id="card-svg-plus" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_522_2)">
                            <path d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100V100Z" fill="white"/>
                            <path d="M50 25C50.8288 25 51.6237 25.3292 52.2097 25.9153C52.7958 26.5013 53.125 27.2962 53.125 28.125V46.875H71.875C72.7038 46.875 73.4987 47.2042 74.0847 47.7903C74.6708 48.3763 75 49.1712 75 50C75 50.8288 74.6708 51.6237 74.0847 52.2097C73.4987 52.7958 72.7038 53.125 71.875 53.125H53.125V71.875C53.125 72.7038 52.7958 73.4987 52.2097 74.0847C51.6237 74.6708 50.8288 75 50 75C49.1712 75 48.3763 74.6708 47.7903 74.0847C47.2042 73.4987 46.875 72.7038 46.875 71.875V53.125H28.125C27.2962 53.125 26.5013 52.7958 25.9153 52.2097C25.3292 51.6237 25 50.8288 25 50C25 49.1712 25.3292 48.3763 25.9153 47.7903C26.5013 47.2042 27.2962 46.875 28.125 46.875H46.875V28.125C46.875 27.2962 47.2042 26.5013 47.7903 25.9153C48.3763 25.3292 49.1712 25 50 25V25Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_522_2">
                            <rect width="100" height="100" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <h4>Mai multe Vocabulare</h4>
                    </Link>
                </div>
            </div>
            <div className="erasmus-developers">
                <div className="infoDevelops">
                <img src="https://www.bairesdev.com/wp-content/uploads/2021/07/software-developing-team-1024x683.jpg" alt='imageNoi'/>
                <ul className='right-block-info'>
                    <h2>Programmers who worked on this Web Application</h2>
                    <h3>Nicolas Morasanu - BackEnd and Server Engineer</h3>
                    <a href="https://github.com/darkykek" rel="noreferrer" target="_blank">
                        <img src={GitHubLogo} alt="logos" />
                    </a>
                    <h3>Gherasim Petru Catalin - FrontEnd and React Developer</h3>
                    <a href="https://github.com/Petru3" rel="noreferrer" target="_blank">
                        <img src={GitHubLogo} alt="logos" />
                    </a>
                    <a href="https://www.facebook.com/petrucatalin.gherasim" rel="noreferrer" target="_blank">
                        <img src={FacebookLogo} alt="logos" />
                    </a>
                    <a href="https://www.instagram.com/petru.cata_/" rel="noreferrer" target="_blank">
                        <img src={InstagramLogo} alt="logos" />
                    </a>
                    <h3>Solcanu Pavel Alexandru - FrontEnd Developer</h3>
                    <a href="https://www.facebook.com/pavelalexandru.solcanu" rel="noreferrer" target="_blank">
                        <img src={FacebookLogo} alt="logos" />
                    </a>
                    <a href="https://www.instagram.com/alexsolcanu/" rel="noreferrer" target="_blank">
                        <img src={InstagramLogo} alt="logos" />
                    </a>
                    <h3>Popescu Andrei -FrontEnd Developer</h3>
                    <a href="https://github.com/lenyziskamora" rel="noreferrer" target="_blank">
                        <img src={GitHubLogo} alt="logos" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100083994593834" rel="noreferrer" target="_blank">
                        <img src={FacebookLogo} alt="logos" />
                    </a>
                    <a href="https://www.instagram.com/andrei_p0pescu/" rel="noreferrer" target="_blank">
                        <img src={InstagramLogo} alt="logos" />
                    </a>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomePage
