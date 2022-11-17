import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BrowserRoutes as Routers } from 'react-router-dom'
import axios from 'axios';



function CountriesList() {
    const [countries, setCountries] = useState(null);
    const [fetching, setFetching] = useState(true);

    const getCountries = async () => {
        try {
            const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
            const countries = response.data;
            setCountries(countries);
            setFetching(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApartments();
    }, []);

    if (fetching) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div>
                {countries.map((oneCountry) => {
                    return (
                        <div key={oneCountry._id} className="country">
                            <Link to={`/${oneCountry.alpha3Code}`}><p>{oneCountry.name.common}</p>
                            </Link>
                        </div>
                    );
                })
                }
            </div >
        );
    }
}

export default CountriesList