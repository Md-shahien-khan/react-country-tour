import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    // If there is some object inside an array then initial value will be empty array in the state.
    return (
        <div>
            <h3 className="font-bold">Countries Length : {countries.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }  
            </div>
        </div>
    );
};

export default Countries;