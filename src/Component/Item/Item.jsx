import { Link } from 'react-router-dom'
import React from 'react'

export default function Item({data,type}) {
  return (
   
    <div className="col-md-3 col-lg-2  col-12">
     <div className="item-text position-relative overflow-hidden">
                 <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} className="w-100 rounded-2" alt="" />
       <Link to={"/details/"+data.id+"/"+type}>
         <div className="caption rounded-2 text-white">
             <h5 className='text-center p-1 fw-semibold fs-6'>{data.title}{data.name}</h5>
             <p className='text-white-50'>{data.overview?.split(" ").splice(0,15).join(" ")}</p>
         </div>
       </Link>
         <div className="vote bg-info rounded-2">
           {data.vote_average}
         </div>
     </div>
    </div>
     
  )
}
