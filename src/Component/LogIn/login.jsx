import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

let userList;
if (localStorage.getItem('list') == null) {
    userList = []
} else {
    userList = JSON.parse(localStorage.getItem('list'))
   
}
let [user,setUser] = useState({
email: "",
password:""

})
let [validError,setValidError]=useState([])

let navigate =useNavigate()
  function getUserData(e){
    let currentUser = {...user}
    currentUser[e.target.name]= e.target.value
    setUser(currentUser)
  }

 async function loginuser(e){
  e.preventDefault()
   if(validate()){
   
       for (var i = 0; i < userList.length; i++) {
            if (userList[i].email.toLowerCase() == user.email.toLowerCase() && userList[i].password.toLowerCase() == user.password.toLowerCase()) {
         let name =userList[i].first_name.concat(" ",userList[i].last_name)    
         localStorage.setItem("userName", name)

               navigate("home")
              window.location.reload();
                return
            }
            document.getElementById("exist").innerHTML = `<span class="text-danger">Email or Password incorrect</span>`

        }
  
 
   }

}

function validate(){
  let schema =Joi.object({

    email:Joi.string().email({minDomainSegments:2,tlds:{alow:false}}).messages({
      "string.empty":"Email is required"
    }),
    password:Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z]).{8,}$/)).messages({
      "string.empty":"Password is required",
      "string.pattern.base":"You must enter strong password",
      
    }),

  })

let res = schema.validate(user,{abortEarly:false})
if(res.error){
  setValidError(res.error.details)
return false
}else{
  return true
}
}


function gotoregister(){
  navigate("register")
}

  return (
  < >
 
  <br />
  <div className="container-LogIn my-5 pb-5">
    <div className='my-5' id='shadow'>
    <h2 className='text-center'>LogIn</h2>
 
    <form action="" onSubmit={(e)=>loginuser(e)} >
     
       
        <div className="form-group my-3">
        <label htmlFor="email" className='mb-1'>Your Email :</label>
        <input type="email" onChange={(e)=>getUserData(e)} id='email' className='form-control' name='email' />
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
        <p id='exist'></p>
   
      <button  className='btn btn-info d-flex mx-auto'>
       LogIn
        </button>
        </form>
        <p className='text-center mt-3'>Not a Member Yet ?    
        <button className='text-center bg-transparent text-primary  border border-end-0 border-top-0 border-start-0 border-primary' onClick={()=>gotoregister()}> Create Account..!</button>
        </p>
 
    
  </div> 
  <br />
  <br />
  </div>
  </>
  )
}
