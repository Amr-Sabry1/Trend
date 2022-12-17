
import axios from 'axios'
import Joi from 'joi'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
let userList;
if (localStorage.getItem('list') == null) {
    userList = []
} else {
    userList = JSON.parse(localStorage.getItem('list'))
   
}
let [user,setUser] = useState({
first_name :"",
last_name : "",
age: 0,
email: "",
password:""

})
let [validError,setValidError]=useState([])
let [isloading,setIsloading]=useState(false)
let navigate =useNavigate()
  function getUserData(e){
    let currentUser = {...user}
    currentUser[e.target.name]= e.target.value
    setUser(currentUser)
  }

 async function register(e){
  e.preventDefault()
   if(validate()){
    setIsloading(true)
       for (var i = 0; i < userList.length; i++) {
            if (userList[i].email.toLowerCase() == user.email.toLowerCase()) {
             document.getElementById("exist").innerHTML=`<span class="text-danger">Email Already Exist!</span>`
              return
                
            }
        }
  userList.push(user)
  localStorage.setItem("list", JSON.stringify(userList))
 navigate("/")
   }

}

function validate(){
  let schema =Joi.object({
    first_name:Joi.string().min(3).max(10).required().messages({
      "string.empty":"First Name is required",
      "string.min":"You must enter more than 3 chrachters",
      "string.max":"You must enter less than 10 chrachters"
    }),
    last_name:Joi.string().min(3).max(10).required().messages({
      "string.empty":"Last Name is required",
      "string.min":"You must enter more than 3 chrachters",
      "string.max":"You must enter less than 10 chrachters"
    }),
    email:Joi.string().email({minDomainSegments:2,tlds:{alow:false}}).messages({
      "string.empty":"Email is required"
    }),
    password:Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z]).{8,}$/)).messages({
      "string.empty":"Password is required",
      "string.pattern.base":"You must enter strong password",
      
    }),
age:Joi.number().min(16).max(40).required().messages({
  "number.min":"Age must be greater than 16 And less than 40",
  "number.max":"Age must be greater than 16 And less than 40"
})
  })

let res = schema.validate(user,{abortEarly:false})
if(res.error){
  setValidError(res.error.details)
return false
}else{
  return true
}
}

function gotoLogIn(){
  navigate("/")
}
  return (
  <>
  <br />
  <br />

  

  <div className="container-LogIn my-md-4">
    <div id='shadow'>
    <h2 className=' text-center'>Registration Form</h2>
 
    <form action="" onSubmit={(e)=>register(e)}>
      <div className="form-group my-3">
        <label htmlFor="first_name" className='mb-1'>First Name :</label>
        <input type="text" onChange={(e)=>getUserData(e)} id='first_name' className='form-control' name='first_name' />
<p className="text-danger pt-2">
         {validError.filter(ele => ele.context.label == "first_name")[0]?.message}
</p>
      </div>
        <div className="form-group my-3">
        <label htmlFor="last_name" className='mb-1'>Last Name :</label>
        <input type="text" onChange={(e)=>getUserData(e)} id='last_name' className='form-control' name='last_name' />
      <p className="text-danger pt-2">
         {validError.filter(ele => ele.context.label == "last_name")[0]?.message}
</p>
      </div>
        <div className="form-group my-3">
        <label htmlFor="email" className='mb-1'>Your Email :</label>
        <input type="email" onChange={(e)=>getUserData(e)} id='email' className='form-control' name='email' />
        <p id='exist'></p>
      <p className="text-danger">
         {validError.filter(ele => ele.context.label == "email")[0]?.message}
</p>
      </div>

     <div className="form-group my-3">
        <label htmlFor="password" className='mb-1'>Password :</label>
        <input type="password" onChange={(e)=>getUserData(e)} id='password' className='form-control' name='password' />
     <p className="text-danger pt-2">
         {validError.filter(ele => ele.context.label == "password")[0]?.message}
</p>
      </div>
     <div className="form-group my-3">
        <label htmlFor="age" className='mb-1'>Your Age :</label>
        <input type="number" onChange={(e)=>getUserData(e)} id='age' className='form-control' name='age' />
      <p className="text-danger pt-2">
         {validError.filter(ele => ele.context.label == "age")[0]?.message}
</p>
      </div>
      <button  className='btn btn-info d-flex mx-auto'>
        {isloading? <i className='fa fa-spinner fa-spin'></i>:"Sigin Up"}
        </button>
         </form>
         <p className='text-center mt-3'>Do You Have Acouunt ?    
         <button className='text-center bg-transparent text-primary  border border-end-0 border-top-0 border-start-0 border-primary' onClick={()=>gotoLogIn()}> LogIn..</button>
        </p>
   
  </div></div>
  </>
  )
}
