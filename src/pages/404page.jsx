import React from "react";
import "../css/page404.css";
import "../css/button.css";
import {Link} from "react-router-dom";

export default function NotFoundPage(){

    return(
        <div id="page404">
            <h2>Aie ! Page non trouvée</h2>
            <Link to={{
                pathname: "/"// your data array of objects
            }}><button>Retourner à l'accueil</button></Link>

        </div>
    )

}

