import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";


function App() {
  const [countries, setCountries] = useState([])


  const getFromApi = async () => {
    try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    getFromApi()

  }, []);

  return <div className="App">

    <Navbar />

    <div className="container">
      <div className="row">
        <CountriesList countries={countries} />
      </div>
      <Routes>
        <Route path="/country:id" element={<CountryDetails />} />
      </Routes>
    </div>;

  </div>
}
export default App;