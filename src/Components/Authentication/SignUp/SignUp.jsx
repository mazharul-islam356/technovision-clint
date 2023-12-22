import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
  } from "@material-tailwind/react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";

const SignUp = () => {

    const {REuser} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const hey = e.target.hey.value;
        console.log(hey);
        console.log(name,email,pass);
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
    
    
        REuser(email,pass)
        .then(result=>console.log(result.user))
        .catch(err=>console.log(err))
    
          
      }

    return (
        <div>
             <div className="my-10 flex justify-center">
    <form onSubmit={handleSubmit}>
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign up
        </Typography>
      </CardHeader>

      <CardBody className="flex flex-col gap-4">
        <Input name="name" label="Name" size="lg" />
        <Input name="email" label="Email" size="lg" />
        <Input type="password" name="pass" label="Password" size="lg" />
      </CardBody>

      <CardFooter className="pt-0">
        <button className="btn ml-10 btn-outline btn-wide">Sign up</button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
           <Link to='/login'> Sign In</Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>

    </form>
        </div>
        </div>
    );
};

export default SignUp;