import React from "react";

export default function Movie(props){
    // ---
    const styles = {
        backgroundImage: `url('http://image.tmdb.org/t/p/w500/${props.image}')`
    }
    //

    return(
        <button className={props.isShown ? "movie active" : "movie"} onClick={() => props.showMovie(props.id, props.title, props.backdrop_path)} handleKey={()=> onkeydown()} style={styles} key={props.id}> 
            <p className="movie-title">{props.title}</p>
        </button>
    )
}