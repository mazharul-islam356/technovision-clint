
import { useState } from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  
  Dialog,
  DialogHeader,
  DialogBody,
  Textarea,
  
} from "@material-tailwind/react";

import { FloatingLabel } from "flowbite-react";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";






const CreateT = () => {

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const axiosP = useAxios()

  const { register, handleSubmit } = useForm();

  const onSubmit = data =>{ 

    console.log(data);

    axiosP.post('/todo', data)
      .then(response => {console.log('Data submitted successfully:', response.data)
      if(response.data.acknowledged === true){
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${data.title} Added succesfully`,
            showConfirmButton: false,
            timer: 1550
          });
          
    }
    })
      .catch(error => console.error('Error submitting data:', error));

  };




  return (
    <div>

        <div className="mx-8 mt-8">

        <div className="flex items-center justify-evenly gap-10">
        <h1 className="text-center text-2xl font-semibold font-sans">All task</h1>
        <button onClick={handleOpen}  className="btn btn-outline btn-info btn-md mb-2 ">
        <MdOutlineCreateNewFolder />
            Create a task</button>
        </div>
        
<div className="relative overflow-x-auto">
<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-900 uppercase bg-gray-400 dark:bg-gray-400 dark:text-gray-800">
        <tr>
            <th scope="col" className="px-6 py-3">
                To-do
            </th>
            <th scope="col" className="px-6 py-3">
                out going
            </th>
            <th scope="col" className="px-6 py-3">
                completed
            </th>
            
        </tr>
    </thead>
    <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-400 whitespace-nowrap dark:text-white">
               <Link>Task 01 todo</Link>
            </th>
            <td className="px-6 py-4">
            <Link>Task 01 todo</Link>
            </td>
            <td className="px-6 py-4">
            <Link>Task 01 todo</Link>
            </td>
           
        </tr>
     
    </tbody>
</table>


<Dialog open={open} handler={handleOpen}>
    
    <form className="flex flex-col w-11/12 mx-auto my-8 justify-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="text-2xl text-center font-bold">Create a task</div>
    <FloatingLabel {...register("title")} variant="filled" label="Title" />
    <Textarea {...register("description")} label="Description"></Textarea>
    <FloatingLabel {...register("deadline")} variant="filled" label="Deadline" type="number" />
    <button className="btn btn-outline btn-info">Create</button>
</form>
    
  

  </Dialog>
</div>

        </div>
    </div>
);


}

 
  

export default CreateT;