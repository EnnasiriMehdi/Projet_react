import React from "react";
import { Link } from "react-router-dom";

export default function PokementId() {

    return(
        <div>
            <h1>WELCOME TO poke id</h1>
            <Link to={{
                pathname: "/",
                state: "data" // your data array of objects
            }}><button>Retourner à l'accueil</button></Link>
        </div>
    )

}
