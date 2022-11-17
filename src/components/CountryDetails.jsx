import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import CountriesList from './CountriesList';
import axios from 'axios';

function CountryDetails() {
    const { id } = useParams();
    const [country, setCountry] = useState(null);

    const getCountry = async () => {
        try {
          const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`);
          setCountry(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getCountry()
       }, [id]);


    return (
        <div>
        {country && 
     (   
           
           <div className="col-7">
           <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flags" />
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {country.borders.map((eachCountry)=>{
                        return (<li>{eachCountry}</li>)
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
           
           
           
           )}

        </div>
    )
}

export default CountryDetails