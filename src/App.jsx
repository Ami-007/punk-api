import './App.scss';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect} from 'react';

const App = () => {

  const [beerArr, setBeerArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
     const URL = "https://api.punkapi.com/v2/beers?per_page=80";
     fetch(URL)
     .then(response => {
       return response.json();
     }).then (beer => {
       setBeerArr(beer)
     }).catch((error) => console.log(error));
  }, [])

   const handleSearch = (event) => {
     setSearchTerm(event.target.value.toLowerCase());
     event.preventDefault();
   }

   const filterBeers = beerArr.filter((beer) => {
     const lowerCasebeer = beer.name.toLowerCase();
     return lowerCasebeer.includes(searchTerm);
   })

  return (
  <div className="App">
    <NavBar searchTerm={searchTerm} handleSearch={handleSearch} /> 
    <Main beerArr={filterBeers}/>
  </div>
  )

}

export default App;

// filterBeers={filterBeers}