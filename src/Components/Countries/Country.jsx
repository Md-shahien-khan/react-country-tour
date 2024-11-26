const Country = ({country}) => {
    const {name, flags, population, region, cca2, area} = country;
    return (
        <div className="p-2 border-2 w-7/12 mx-auto m-2 rounded-lg bg-slate-100">
            <h3 className="font-bold">Name : {name.common}</h3>
            <img className="w-full h-[100px]" src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>{cca2}</p>
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;