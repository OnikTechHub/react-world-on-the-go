import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);


    const handleVisitedCountries = (country) => {
        console.log('handle visited country cliucked', country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlag,flag];
        setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    console.log(countries);

    return (
        <div>
            <div className='header-container'>
                <h1>In the countries: {countries.length}</h1>
                <h3>Total Country Visited:  {visitedCountries.length}</h3>
                <h3>Total Flags Visited:  {visitedFlag.length}</h3>
                <ol className=''>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ol>

                <div className='visited-flag-container'>
                    {
                        visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                    }
                </div>
            </div>
            <div className='countries'>
                {
                    countries.map(country => (<Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>


                    ))
                }
            </div>
        </div>
    );
};

export default Countries;

