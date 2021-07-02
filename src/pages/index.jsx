import React from "react";
import { Link } from "react-router-dom";
import "../css/index.css";

export default function MainPage() {

    return(
        <div>
            <h1>WELCOME TO THE EXAM</h1>
            <div className="main_container">
                <div className="left"> <p className="titleApi">PokeApi</p><p>Api permettant de récupérer les données d'un pokemon. C</p></div>
                <div className="right"> <p className="titleApi">API previsions meteo</p><p>Api permettant de récupérer les donnés des prévisions météorologique de Paris </p></div>
            </div>
            <div className="buttonDiv">
            <Link to={{
                pathname: "/PokemonWeather",
                state: "data" // your data array of objects
            }}><button>Go !</button></Link>
            </div>
        </div>
    )

}

