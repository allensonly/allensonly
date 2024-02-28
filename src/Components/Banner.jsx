import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../instance';

function Banner({fetchURL}) {
   /*  console.log(fetchURL); */

   const [movie,setmovie] = useState()
   const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchdata = async () => {
        const {data} = await instance.get(fetchURL)
       /*  console.log(data); */
/*         console.log(data.results[Math.floor(Math.random()*data.results.length)]);
 */
        setmovie((data.results[Math.floor(Math.random()*data.results.length)]))
    }

    console.log(movie);

    useEffect(() => {
        fetchdata()
    },[])

  return (
    <div style={{height:'600px',backgroundImage : `url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed',fontSize:'20px',color:'white'}} className='banner-content'>
      
      <div style={{fontSize:'70px',background:'none',color:'white',marginBottom:'10px',fontWeight:'bold'}}>{movie?.original_name}</div>
      


     {movie?.overview}
     
   
     <div style={{background:'none',padding:'10px'}}>
      <button className='btn'> watch</button>

      <button className=' buton'>+ Add list</button>
      
     </div>
     
    </div>
  )
}

export default Banner