import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Banner from './Components/Banner';

function App() {
  return (
 <div style={{backgroundColor:'black'}}>
<h1 style={{color:'red',backgroundColor:'black',paddingLeft:'10px'}} > Netflix</h1>
 <Banner fetchURL={requests.fetchNetflixOriginals}/>


  
  < Row isPoster ={true} title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals} />

  < Row title=" Trending" fetchURL={requests.fetchTrending} />


  < Row title="TopRated" fetchURL={requests.fetchTopRated}/>

  < Row title="ActionMovies" fetchURL={requests.fetchActionMovies}/>

  < Row title="ComedyMovies" fetchURL={requests.fetchComedyMovies}/>

  < Row title="HorrorMovies" fetchURL={requests.fetchHorrorMovies}/>

  < Row title="RomanceMovies" fetchURL={requests.fetchRomanceMovies}/>

  < Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>


 
 </div>
 
  );
}

export default App;
