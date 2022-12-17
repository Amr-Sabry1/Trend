
import React from 'react'

export default function Profile({data}) {
  return (
   
    <div className="col-md-2">
     <div className="item-text position-relative overflow-hidden">
                 <img src={"https://image.tmdb.org/t/p/w500" + data.profile_path} className="w-100 rounded-2" alt="" />
      
         <div className="caption rounded-2 text-white d-flex justify-content-center align-items-center">
             <h5 className='text-center p-1 fw-semibold fs-4'>{data.name}</h5>
         </div>
     </div>
    </div>
     
  )
}
