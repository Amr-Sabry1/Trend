import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/loading'
export default function Home() {
let[movies,setmovies]=useState([])
let[tv,setTv]=useState([])
let[isLoading,setisLoading]=useState(true)


 async function getTrending(type,dest){
  let{data} = await axios.get(`https://api.themoviedb.org/3/${type}/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`)
dest(data.results)  

setisLoading(false)
}
  useEffect(()=>{
   getTrending("movie",setmovies)
   getTrending("tv",setTv)
  },[])
  return (
    <>
    <div className="container my-5 mt-4 py-5">

      {isLoading && <Loading />}
      {!isLoading && <> <div className="row g-4">
        <div className="col-md-6 col-lg-4 col-12">
          <div className="content d-flex justify-content-center flex-column">

              <h2><span className='fs-5'>Trending</span> <br /> Movies <br /> To Watching Now</h2>
            <p className='text-muted'>Watch Movies In Our App Now With Us</p>

          </div>
        </div>
      {movies?.slice(0,10).map(movie=> <Item key={movie.id} data={movie} type={"movie"} />)}
      </div>
      <div className="row g-4 mt-5">
        <div className="col-md-6 col-lg-4 col-12">
          <div className="content d-flex justify-content-center flex-column">

              <h2><span className='fs-5'>Trending</span> <br /> Movies <br /> To Watching Now</h2>
            <p className='text-muted'>Watch Movies In Our App Now With Us</p>

          </div>
        </div>
      {tv?.slice(0,10).map(movie=> <Item key={movie.id} data={movie} type={"tv"} />)}
      </div></>}
     
    </div>
      
    </>
  )
}

