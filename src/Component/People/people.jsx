import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/loading'
import Profile from '../Profile/Profile'
export default function People() {
let[People,setPeople]=useState([])

let[isLoading,setisLoading]=useState(true)
    let pageList =new Array(10).fill("aa").map((ele,i)=>i+1)


 async function getTrending(page){
  let{data} = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=en-US&page=${page}`)
setPeople(data.results) 
console.log(data.results); 
setisLoading(false)
}

  useEffect(()=>{
   getTrending(1)
  },[])
  
     function paginate(page){
   getTrending(page)

  }
  return (
    <>
    <div className="container my-5 mt-4 py-5">

      {isLoading && <Loading />}
      {!isLoading && <> <div className="row g-4">
        <div className="text-center">
              <h3>Trending People...</h3>
          </div>
      {People?.map(movie=> <Profile key={movie.id} data={movie} />)}
      </div>
    
      
      
      </>}
           <nav aria-label="Page navigation example" className='paginate mt-5 d-flex justify-content-center'>
  <ul className="pagination ">
  {pageList.map((ele)=> <li className="page-item" onClick={()=>paginate(ele)} key={ele}><p className="page-link">{ele}</p></li>)}
   
 
  </ul>
</nav>
    </div>
      
    </>
  )
}

