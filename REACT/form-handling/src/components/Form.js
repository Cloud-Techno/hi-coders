import React, {useState} from 'react'
import Axios from 'axios'


export default function Form() {
  const url ='http://174.138.103.233/api/employees'
  const [data,setData] = useState({
    firstName:'',
    lastName:'',
    gender:'',
    birthday:'',
    email:'',
    password:'',
    about:''
  })

  function handle(e) {
    const newUser={...data}
    newUser[e.target.id]=e.target.value;
    setData(newUser);
    console.log(newUser)

  }
  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      firstName : data.firstName,
      lastName:data.lastName,
      gender:data.gender,
      birthday:data.birthday,
      email:data.email,
      password: data.password,
      about:data.about

    })
    .then(response=>{
      console.log(response.data)
    })
  }

  return (
 <div>
   <form onSubmit={(e)=>submit(e)}>
     <input onChange={(e)=>handle(e)} id='firstName' value={data.firstName} placeholder='first Name' type="text"/>
     <input onChange={(e)=>handle(e)} id='lastName' value={data.lastName}placeholder='Last Name' type="text"/>
     <input onChange={(e)=>handle(e)} id='gender' value={data.gender}placeholder='gender' type="text"/>
     <input onChange={(e)=>handle(e)} id='birthday' value={data.birthday}placeholder='birthday' type="date"/>
     <input onChange={(e)=>handle(e)} id='email' value={data.email}placeholder='email' type="email"/>
     <input onChange={(e)=>handle(e)} id='password' value={data.password}placeholder='password' type="password"/>
     <input onChange={(e)=>handle(e)} id='about' value={data.about} placeholder='about' type="text"/>
     <button>Submit</button>
       </form>
 </div>
  )
}

