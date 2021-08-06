import React, { useEffect } from 'react';
import './App.css';
import GetList from './components/GetList';


function App() {

  const [countryList , setcountryList]= React.useState([]);
  const [loadingData, setLoadingData] = React.useState(false);
  useEffect(() => {
     async function fetchcountryList()
     {
      setLoadingData(true);
       try{
        const requesUrl = 'https://restcountries.eu/rest/v2/region/asia';
        const response = await fetch(requesUrl);
        const reponseJSON = await response.json();
        console.log(reponseJSON);
        setcountryList(reponseJSON);
        setLoadingData(false);
       }catch{

       }
     }
     fetchcountryList();
  },[]);


  return (
    <div className="App">
      {!loadingData && <button onClick={() => "fetchcountryList"}>Refresh</button>}
      {loadingData && <span>Loading...</span>}
      <GetList  countryList={countryList} />
      
    </div>
  );
}

export default App;
