import React from "react"
import Row from "./component/Row"
import request from "./request"
import Banner from "./component/Banner";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
       <Header/>
      <Banner/>
      <Row title="Netflix Originals" fetchUrl= {request.fetchNetflix} isLargeRow={true}/>
      <Row title="Netflix Trending" fetchUrl= {request.fetchTrending}/>
      <Row title="Netflix TopRated" fetchUrl= {request.fetchToprated}/>
      <Row title="Netflix ActionMovies" fetchUrl= {request.fetchActionmovies}/>
      <Row title="Netflix ComedyMovies" fetchUrl= {request.fetchComedymovies}/>
      <Row title="Netflix HorrorMovies" fetchUrl= {request.fetchHorrormovies}/>
      <Row title="Netflix RomanticMovies" fetchUrl= {request.fetchRomanticmovies}/>
      <Row title="Netflix DocumentriesMovies" fetchUrl= {request.fetchdocumentriesmovies}/>
    </div>
  );
}

export default App;
