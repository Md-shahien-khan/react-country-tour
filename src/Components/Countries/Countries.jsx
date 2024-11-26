import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCounteries, setVisitedCounteries] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);


    const handleVisitedCountry = countryItem =>{
        console.log('Add this to your visited countries');
        const newVisitedCountries = [...visitedCounteries, countryItem];
        setVisitedCounteries(newVisitedCountries);
    }
    // If there is some object inside an array then initial value will be empty array in the state.
    return (
        <div className="border-2 p-4">
            <h3 className="font-bold">Countries Length : {countries.length}</h3>
            <div>
                <h5>Visited Countries {visitedCounteries.length}</h5>
                <ul>
                    {
                        visitedCounteries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
            }  
            </div>
        </div>
    );
};

export default Countries;