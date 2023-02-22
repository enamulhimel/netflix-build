const API_KEY = `04f1b60fb3b1ecee2ae17bab52b8239f`;


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    
};

export default requests;

//https://api.themoviedb.org/3/movie/550?04f1b60fb3b1ecee2ae17bab52b8239f&language=en-US

//https://api.themoviedb.org/3/discover/tv?api_key=04f1b60fb3b1ecee2ae17bab52b8239f&&with_networks=213