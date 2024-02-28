import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title,fetchURL,isPoster}) {
const [allMovies,setAllmovies] = useState()
const base_url = "https://image.tmdb.org/t/p/original/";


    //console.log(fetchURL);

    const fetchData = async ()=>{
        const {data} = await instance.get(fetchURL)
        //console.log(data.results);
        setAllmovies(data.results)

    }
    console.log(allMovies);
   
    useEffect(() => {
        fetchData()
    },[]);
  return (
    <div className='row' style={{backgroundColor:'black'}}>
        <h1>{title}</h1>
        <div className='movierow'>
            {
                allMovies?.map(item => (
                    <  img className={`movies ${isPoster && 'movie-poster'}`} src={`${base_url}${isPoster?item?.poster_path:item?.backdrop_path}`} alt="no image" />
                    
                    
                ) )
                
            }
 
        </div>
    </div>
  )
}

export default Row