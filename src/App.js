import './App.css';
import React from "react";

import MainPage from "./pages";
import NotFoundPage from "./pages/404page";
import PokemonWeatherPage from "./pages/PokemonWeatherPage";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
}   from "react-router-dom"



function App() {

  return (
      <Router>
          <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/PokemonWeather" component={PokemonWeatherPage}/>
              <Route exact path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
          </Switch>
      </Router>
  );
  // <Route path="/" component={MainPage}/>
  // return(
  //     <div className="App">
  //         <header className="App-header">
  //             <PokemonDisplay pokemonUrl={selectedPokemonUrl}/>
  //             <PokemonTypeList setType={setSelectedType}/>
  //             <PokemonList type={selectedType} setPokemonUrl={setSelectedPokemonUrl}/>
  //         </header>
  //     </div>
  // )
}

export default App;
