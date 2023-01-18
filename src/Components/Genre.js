import React from "react";
import Selectedmovie from "./Selectedmovie";
import Movie from "./Movie";

export default function Genre(props){
    
    const api_key = 'API_KEY'

    // Show Movies By Genre
    const [movies, setMovies] = React.useState([])

    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${props.id}&api_key=${api_key}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    },[props.id])

    // -----------------


    //  Get one movie
    const [selectedMovie, setSelectedMovie] = React.useState([])
    const [movieNum, setMovieNum] = React.useState()
    const [isShown, setIsShown] = React.useState(false)

    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieNum}?api_key=${api_key}&language=en-US`)
        .then(res => res.json())
        .then(data => setSelectedMovie(data))
    }, [movieNum])
    
    // -----------------

    function showMovie(id){ //Show movie with ID
        setMovieNum(id)
        setIsShown(isShown => !isShown)
     }

    function handleKey(e){
        console.log(e)
    }

    const allMovies = movies.map((movie, id) => {
        return <Movie title={movie.title} handleKey={handleKey} showMovie={showMovie} isShown={false} image={movie.poster_path} key={movie.id} id={movie.id}/>
    })
  
    // EVENT LISTENER TO CLOSE MODAL
    React.useEffect(() => {

        function handleClick(e) {
            if(e.keyCode !== 27){
                return
            } else {
                setSelectedMovie([])
                const activeMovie = document.querySelectorAll('.active-movie')

                activeMovie.forEach(movie => {
                    movie.style.display='none'
                })
            }
        }

        document.addEventListener('keydown', handleClick)

        return () => {
            document.body.removeEventListener('keydown', handleClick)
        }
    }, [])


    return(
        <>
            {isShown && <Selectedmovie data={selectedMovie}/>}  
            
            <div className="genre-container">
                <h2 className="genre-title">{props.title} <ion-icon name="chevron-forward-outline"></ion-icon></h2>
                <div className="movies-container">
                    {allMovies}
                </div>
            </div>
        </>
    )
}