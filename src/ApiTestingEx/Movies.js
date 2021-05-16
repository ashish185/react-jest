class Movies {
    api() {
        return fetch("https://reactnative.dev/movies.json").then( res => {
            return res.json();
        }
        )
    }
}
export default Movies;