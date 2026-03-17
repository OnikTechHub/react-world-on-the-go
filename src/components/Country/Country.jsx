import React, { useState } from 'react';
import './Country.css'

const Country = ( { country, handleVisitedCountries= {handleVisitedCountries}}) => {
    
    // console.log(country )

    console.log(handleVisitedCountries)
    const[visited, setVisited] = useState(false);

    const handleVisited = () =>{

        //----------------------- first system -----------------------------

        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // ---------------------second system ---------------------------

        // setVisited(visited ? false : true);

        // -----------------third system ---------------------- 

        setVisited(!visited);
        handleVisitedCountries(country)




    }
    return (
        
        // <div className={ `country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'} `}> 
        <div className={ `country ${visited && 'country-visited'} `}>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            {/* <p>languages: {languageNames}}</p> */}
            <p>Area: {country.area.area} { country.area.area > 300000 ? "Big Country " : 'Small country' }  </p>
            <p>Region: {country.region.region}</p>
            <p>Continents: {country.continents.continents}</p>

            <button onClick={handleVisited}> 
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;