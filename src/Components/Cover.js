import React from 'react'

export default function Cover() {
    const api_key = 'API_KEY'

    const [popularMovies, setPopularMovies] = React.useState([])

    const movie = popularMovies[Math.floor(Math.random()*popularMovies.length)]
    
    React.useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc`)
        .then(res=>res.json())
        .then(data=>setPopularMovies(data.results))
    },[])

    const styles = {
        backgroundImage:`url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
    }

    return (
        <section className='banner' style={styles}> 
            <div className="banner-movie-overlay"></div>
            <div className="banner-movie-info">
                <div className="banner-movie-head">
                    <h2 className="banner-movie-title">{movie?.title}</h2>
                    <span className="banner-movie-tagline">{movie?.tagline}</span>    
                </div>
                <p className="banner-movie-desc">{movie?.overview}</p>

                <div className='banner-movie-cta'>
                    <button className='banner-movie-watch btn'>Watch<ion-icon name="play"></ion-icon></button>
                    <button className='banner-movie-trailer btn'>Watch trailer</button>
                </div>

                <div className="banner-movie-date">
                    <p className="banner-movie-date-first">Release date</p>
                    <p className="banner-movie-date-second">{movie?.release_date.replaceAll('-','.')}</p>
                </div>

                <p className='banner-movie-ratings'>{movie?.vote_average > 6.9 && <ion-icon style={{color:'#18A558'}} name="thumbs-up-sharp"></ion-icon> || <ion-icon style={{color:'#e60a15'}} name="thumbs-down-sharp"></ion-icon>}{movie?.vote_average.toFixed(1)}</p>
            </div>
            {/* <button onClick={movie?.handleEvent} className="banner-movie-close"><ion-icon name="close-circle-outline"></ion-icon></button> */}
        </section>
    )
}
