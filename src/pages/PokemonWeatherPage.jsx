import React, {useState} from "react";
import PokemonDisplay from "../components/PokemonDisplay";
import PokemonList from "../components/PokemonList";
import PokemonTypeList from "../components/PokemonTypeList";
import {Link} from "react-router-dom";

export default function PokemonWeatherPage() {

    let [selectedType, setSelectedType] = useState("");
    let [selectedPokemonUrl, setSelectedPokemonUrl] = useState("");

    return(
             <div className="App">
                 <header className="App-header">
                     <Link to={{
                         pathname: "/",
                         state: "data" // your data array of objects
                     }}><button>Retourner à l'accueil</button></Link>
                     <PokemonDisplay pokemonUrl={selectedPokemonUrl}/>
                     <PokemonTypeList setType={setSelectedType}/>
                     <PokemonList type={selectedType} setPokemonUrl={setSelectedPokemonUrl}/>
                 </header>
             </div>
    )

}
