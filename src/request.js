const API_KEY = "a6d121891ae195956b1b3680772561cf";

const request = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflix :  `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
    fetchToprated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionmovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedymovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrormovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticmovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchdocumentriesmovies : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request