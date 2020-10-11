const APIKEY = "cc3a9c0ea57cb532d3ce766479fcb0ac"
const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with-genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with-genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with-genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with-genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with-genres=99`,

}
export default requests