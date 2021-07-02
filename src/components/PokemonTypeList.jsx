import {useEffect, useState} from "react";

export default function PokemonTypeList({setType}){
    let[types,setTypes] = useState([]);
    let[weather,setWeather] = useState(0);
    let [selectedValue, setSelectedValue] = useState("");
    let [weatherType, setWeatherType] = useState("");

    useEffect(() => {
        let lastCalled = true;
        const fetchTypes = () => {
            fetch("https://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=CBJSRQV7UXNUeVZhDngAKVE5BTALfQEmBnpQM104B3oHbF4%2FAGABZ1Y4Ui9TfFVjU34BYgswAzNUPwtzXy1WNwhiUj4FblE2VDtWMw4hACtRfwVkCysBJgZtUDFdLgdmB2BePwB9AWFWO1I0U31VYFNoAWQLKwMkVDYLal8wVjAIalI%2FBWFRN1QyVjUOIQArUWQFZQtgAWwGbVBlXWIHZwdiXjMAagFmVmpSMVN9VWdTYgFjCzcDPVQ2C2xfN1YqCHRSTwUVUS5Ue1Z2DmsAclF%2FBTALagFt&_c=4c8268c6d506df758dac15c9888c09a3")
                .then((response) => response.json())
                .then((data) => lastCalled && setWeather(data["2021-07-01 23:00:00"]["temperature"]["sol"]))
                .then(setWeatherType(weather-273.15 > 15 ? "fire" : "water"));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, );

    useEffect(() => {
        let lastCalled = true;

        const fetchTypes = () => {
            fetch("https://pokeapi.co/api/v2/type")
                .then((response) => response.json())
                .then((data) => lastCalled && setTypes(data["results"]));
        };
        fetchTypes();
        return () => {
            lastCalled = false;
        };
    }, []);

    const handleSelection = (event) => {
        setType(event.target.value);
        setSelectedValue(event.target.value);
    };

    return (
        <select value={selectedValue} onChange={handleSelection} onClick={handleSelection}>
            {types.filter(({name}) => name === weatherType ).map(({name}) => (
                <option key={`pokemon-type-${name}`} value={name}>
                    {name}
                </option>
            ))}
        </select>
    );

}
