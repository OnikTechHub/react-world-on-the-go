import React from 'react';
import './Country.css'

const Country = ( { country}) => {
    // console.log(country.languages.languages)

    const handleVisited = () =>{
        console.log('btn click')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            {/* <p>languages: {languageNames}}</p> */}
            <p>Area: {country.area.area} { country.area.area > 300000 ? "Big Country " : 'Small country' }  </p>

            <button onClick={handleVisited}> Not Visited</button>
        </div>
    );
};

export default Country;