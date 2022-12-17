import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/loading'

export default function TvSohs() {
    let pageList =new Array(10).fill("aa").map((ele,i)=>i+1)

let[tv,setTv]=useState([])
let[isLoading,setisLoading]=useState(true)

 async function getTrending(type,dest,page){
  let{data} = await axios.get(`https://api.themoviedb.org/3/${type}/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=${page}`)
dest(data.results)
setisLoading(false)  
}
  useEffect(()=>{
   getTrending("tv",setTv,1)
  },[])
   function paginate(page){
   getTrending("tv",setTv,page)

  }
  return (
    <>
    <div className="container my-5 mt-4 py-5">
       {isLoading && <Loading />}
             {!isLoading && <> <div className="text-center mb-4">
              <h3>Trending TV  To Watch..</h3>
          </div>
      <div className="row g-4">
     
      
      {tv?.map(movie=> <Item key={movie.id} data={movie} type={"tv"} />)}
      </div></>}
       <nav aria-label="Page navigation example" className='paginate mt-5 d-flex justify-content-center'>
  <ul className="pagination ">
  {pageList.map((ele)=> <li className="page-item" onClick={()=>paginate(ele)} key={ele}><p className="page-link">{ele}</p></li>)}
   
 
  </ul>
</nav>
    </div>
      
    </>
  )
}

