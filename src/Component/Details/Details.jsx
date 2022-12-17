import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
  
    let {id,type} =useParams()
async function getDetails(){
    let{data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=15e383204c1b8a09dbfaaa4c01ed7e17`)
    console.log(data);
document.getElementById("show").innerHTML=`<div class="col-md-3">
           <img src=${"https://image.tmdb.org/t/p/w500" + data.poster_path} class="w-100 rounded-2" alt="" />
          </div>
          <div class="col-md-9 mt-md-0 mt-3">
            <div class="text ">
              <h1>${data?.original_title}</h1>
              <p class="text-white-50">${data?.tagline}</p>
              <ul class='my-4 list-unstyled d-flex '>${data.genres?.map(genre =>`<div class='bg-primary bg-opacity-75 p-2 rounded-2 mx-2'>${genre.name}</div>`)}</ul>
              
            <p class="my-4"><b>Vote : <b/> <span class="ms-2 bg-success py-1 px-2 rounded-2">${data?.vote_average.toFixed(1)}</span></p>
            <p class="my-4"><b>Popularity : <b/> <span class="ms-1 fw-light">${data.popularity}</span></p>
            <p class="my-4"><b>Release Date : <b/><span class="ms-1 fw-light"> ${data.release_date}</span></p>
              <p class="text-white-50 my-4">${data?.overview}</p>
            <button class='my-1 btn btn-info'><a class="text-decoration-none text-white" href=${data.homepage} target="_blank">Watch It Now</a></button>
       
            </div>
          </div>`
}
  useEffect(()=>{
  getDetails()
  },)
  return (
  <>
  <div className="container  mt-md-4 py-md-4 pb-md-5 pb-5">
    <div className="row mt-5 py-5" id='show'>
    </div>
    <br />
    <br />
  </div> 
  </>
  )
}
