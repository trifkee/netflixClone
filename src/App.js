import React from "react";
import Login from "./Components/Login";
import Genre from "./Components/Genre";
import Cover from "./Components/Cover";
import Genres from "../src/Genres.json";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export default function App(){

    const allGenres = Genres.map(genre => {
        return <Genre title={genre.name} key={genre.id} id={genre.id}/>
    })

    let logged = localStorage.getItem('logged')
    logged = JSON.parse(logged)
    
    return(
        <BrowserRouter>
            {logged && <Navigate to='/home'/>}
            <Routes>
                <Route index element={<Login />}/>
                <Route path="/home" element={
                    <>
                    <Cover />
                     <section className="all-movies">
                         <div className="main-container">
                             {allGenres}
                         </div>
                     </section>
                </>}
                />
            </Routes>
       </BrowserRouter>
    )
}