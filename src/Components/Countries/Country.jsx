import { useState } from "react";

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {

    const {name, flags, population, region, cca2, area} = country;
    const [visited, setVisited] = useState(false);
    
    const handleVisited = () =>{
        setVisited(!visited);
    };

    // console.log(handleVisitedCountry);


    return (
        <div className="border-2">
            <div className="p-2 border-2 w-7/12 mx-auto m-2 rounded-lg bg-slate-100">
            <h3 className={`font-bold ${visited ? 'text-pink-500' : 'text-black'}`}>Name : {name.common}</h3>
            <img className="w-full h-[100px]" src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>{cca2}</p>
            <p>Area : {area}</p>
            <button className="btn bg-slate-500 rounded-md p-2" onClick={handleVisited}>{visited ? 'Visited' : 'Will Visit'}</button> <br />
            {/* {visited && 'I have visited this country.'} */}
            {visited ? 'I have visited this country.' : 'I want to visit this country'};
            <br />
            <button onClick={() => handleVisitedCountry(country)} className="btn bg-red-300 p-2 rounded-lg">Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} className="btn bg-green-300 p-2 rounded-md m-2">Add Flag</button>
        </div>
        </div>
    );
};

export default Country;