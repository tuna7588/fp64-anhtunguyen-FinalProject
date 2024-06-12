import React from "react";

//include images into your bundle

import Fondo from "../../img/orange.png";
import Melisa from "../../img/Melisa.jpg"
import Rocio from "../../img/Rocio.jpeg"
import Jordi from "../../img/Jordi.jpg"
import AnhTu from "../../img/Anh-Tu.jpg"
import "../../styles/AboutUs.css";;


//create your first component
export const AboutUs = () => {
    return (<>
        <div style={{ backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', }} className="fondo">
            <h1 className="title"><b>About Us</b></h1>
            <div className="principal">
                <div className="vuelta alt">
                    <div className="card">
                        <div className="front borders">
                            <div className="foto">
                                <img className="foto-img" src={AnhTu} />
                            </div>
                            <div className="datos-front">
                                <div className="name">
                                    <h2>Anh Tu Nguyen</h2>
                                </div>
                                <div className="alias">
                                    <span>Alias: <b>TuNa</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="back borders">
                            <div className="datos">
                                <p>Me formé y trabajé en el sector de Economía. Ahora soy un Developer entusiasmada de aprender cosas nuevas y resolver los problemas en el mundo de la programación. Si no me encuentra escribiendo códigos, estoy con mis preciosos hijos o leyendo un libro.</p></div>
                        </div>
                    </div>
                </div>
                <div className="vuelta alt">
                    <div className="card">
                        <div className="front borders">
                            <div className="foto">
                                <img className="foto-img" src={Melisa} />
                            </div>
                            <div className="datos-front">
                                <div className="name">
                                <h2>Melisa Navarro</h2>
                                </div>
                                <div className="alias">
                                <span>Alias: <b>Phoenix</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="back borders">
                            <div className="datos">
                                <p>Hoy en día, me dedico a explorar y expandir los límites de mi conocimiento en desarrollo de software. Me entusiasma aprender continuamente y aplicar nuevas tecnologías. Fuera del entorno de código y compilaciones, me encontrarás practicando Fitboxing, me considero ávido lectora y espectadora.</p></div>
                        </div>
                    </div>
                </div>
                <div className="vuelta alt">
                    <div className="card">
                        <div className="front borders">
                            <div className="foto">
                                <img className="foto-img" src={Rocio} />
                            </div>
                            <div className="datos-front">
                                <div className="name">
                                <h2>Rocio Martín</h2>
                                </div>
                                <div className="alias">
                                <span>Alias: <b>Leela</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="back borders">
                            <div className="datos">
                                <p>Soy Rocío, decidí cambiar de la Educación Social al mundo de la programación para dar un giro a mi vida. Me apasiona la música, el cine, la literatura y la naturaleza.</p></div>
                        </div>
                    </div>
                </div>
                <div className="vuelta alt">
                    <div className="card">
                        <div className="front borders">
                            <div className="foto">
                                <img className="foto-img" src={Jordi} />
                            </div>
                            <div className="datos-front">
                                <div className="name">
                                <h2>Jordi Goixart</h2>
                                </div>
                                <div className="alias">
                                <span>Alias: <b>DevConKai</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="back borders">
                            <div className="datos">
                                <p>He sido técnico de diálisis durante la mayor parte de mi vida laboral y después, al ver como cada vez, el mundo de la informática me ha ido gustando más y más, finalmente me decidí a ser Sofware Developer. </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};