import React from "react";

export default function Selectedmovie({data}){

    return(
        <article className="active-movie">
            {/* <div className="active-movie-overlay"></div> */}
            <div className="active-movie-info" >
                <div className="active-movie-head">
                    <h2 className="active-movie-title">{data.title}</h2>
                    <span className="active-movie-tagline">{data.tagline}</span>    
                </div>
                <p className="active-movie-desc">{data.overview}</p>
                <div className="active-movie-date">
                    <p className="active-movie-date-first">Release date</p>
                    <p className="active-movie-date-second">{data.release_date}</p>
                </div>
                <p className="active-movie-rating"><ion-icon name="star-outline"></ion-icon>{data.vote_average}</p>
            </div>
            <img className="active-movie-poster" alt={data.title} src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}/>
            {/* <button onClick={data.handleEvent} className="active-movie-close"><ion-icon name="close-circle-outline"></ion-icon></button> */}
        </article>
    )
}