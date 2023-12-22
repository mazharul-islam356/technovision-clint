import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

  const {googleLogin} = useContext(AuthContext)
  const [error,setError] = useState('')

  error && toast.error('Email/Password do not match') 
  const handleLogin = (media) => {
    media()
    .then(res=>console.log(res.user))
    .catch(err=>console.log(err))
  }


  const handleLoginSubmit = (e) =>{
    e.preventDefault()
  

    const email = e.target.email.value;
    const pass = e.target.pass.value;
    
    console.log(email,pass);
    if(pass.length < 6){
      toast.error('Password should be at least 6 characters')
      return
    }
     else if(!/[A-Z]/.test(pass)){
      toast.error('Please include at least one uppercase letter in your password')
      return
    }
    else if (!/[!@#$%^&*()_+\-=[{};':"|,.<>/?]+/.test(pass)){

      toast.error('Please include Special Characters in your password')
      return

    }
    
   
    
    if(email,pass){
    signInWithEmailAndPassword(auth,email,pass)
    .then(res=>console.log(res.user))
    .catch(err=>setError(err.message))
    
    // setError('')
    return
  } 
      
  } 




    return (
        <div className="my-10 flex justify-center">

       <form onSubmit={handleLoginSubmit}>

       <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input name="name" label="Email" size="lg" />
        <Input name="pass" type="password" label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">

       <div className="ml-8">
       <button className="btn btn-outline btn-wide">
          Sign In
        </button>
        <button onClick={()=> handleLogin(googleLogin)} className="btn btn-wide mt-3">
            Continue With
            <FcGoogle className="text-xl"></FcGoogle>
        </button>
       </div>

        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
           <Link to='/signUp'> Sign up</Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>

       </form>
        </div>
    );
};

export default Login;