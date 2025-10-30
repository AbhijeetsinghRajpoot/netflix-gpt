import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [signUp, setSignUp] = useState()
  const [userEmail,setUserEmail] = useState("d")
  console.log(userEmail)
  const handleToggle =()=>{
    setSignUp(!signUp)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }



  return (
    <div className="  " >
        <Header/>
        <div className="absolute" >

        <img src=" https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_small.jpg" alt="bg" />
        </div>
        <div className="" >
        {!signUp? <form className="absolute w-3/12  my-36 mx-auto border border-black bg-black rounded-md bg-opacity-50  right-0 left-0 p-12  text-white ">
            <h1 className="m-2 text-3xl">Sign In</h1>
            <input type="text" 
            placeholder="Email Address"
             className=" bg-slate-900 p-2 m-2 w-full "/>
            <input type="password" 
            placeholder="Enter Password" 
            className=" p-2 m-2 w-full bg-slate-900 " />
            <button 
            type="submit"
            className="bg-red-700 p-2 m-2 w-full " 
            >Sign In</button>
          <p>New to Netflix ? <button type="button" className=" text-red-700 " onClick={()=>setSignUp(true)} >Sign up now</button> </p>
        </form> :
        <form className="absolute w-3/12  my-36 mx-auto border border-black bg-black rounded-md bg-opacity-50  right-0 left-0 p-12  text-white" onSubmit={handleSubmit} >
            <h1 className="m-2 text-3xl">Sign Up</h1>
            <input type="text" 
            placeholder="User Name"
            onChange={(e)=>setUserEmail(e.target.value)}
             className=" bg-slate-900 p-2 m-2 w-full "/>
            <input type="text" 
            placeholder="Email Address"
             className=" bg-slate-900 p-2 m-2 w-full "/>
             
             <input type="text" 
             className=" bg-slate-900 p-2 m-2 w-full "
            placeholder="Password"/>
            <input type="password" 
            placeholder="Confirm Password" 
            className=" p-2 m-2 w-full bg-slate-900 " />
            <button 
            type="submit"
            className="bg-red-700 p-2 m-2 w-full " 
            >Sign up</button>
          <p>Already have an account ? <button className=" text-red-700 " onClick={handleToggle}>Sign In now</button> </p>
        </form> }
        
        </div>

    </div>
  )
}

export default Login