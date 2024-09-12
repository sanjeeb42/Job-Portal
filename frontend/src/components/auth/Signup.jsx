import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate=useNavigate();

  const ChangeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const ChangeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler=async (e)=>{
    e.preventDefault();
    const formdata=new FormData();
    formdata.append("fullname",input.fullname);
    formdata.append("email",input.email);
    formdata.append("phoneNumber",input.phoneNumber);
    formdata.append("role",input.role);
    formdata.append("password",input.password);

    if(input.file){
        formdata.append("file",input.file);
    }
    try {
        const res=await axios.post(`${USER_API_END_POINT}/register`,formdata,{
            headers:{
                "Content-Type":"multipart/form-data"
            },
            withCredentials:true,
        });

        if(res.data.success){
            navigate("/login");
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input type="text" value={input.fullname} name="fullname" onChange={ChangeEventHandler} placeholder="Sanjeeb" />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" value={input.email} name="email" onChange={ChangeEventHandler} placeholder="raisanjeeb42@gmail.com" />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input type="text"  value={input.phoneNumber} name="phoneNumber" onChange={ChangeEventHandler} placeholder="1234567890" />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" value={input.password} name="password" onChange={ChangeEventHandler} placeholder="Password" />
          </div>

          <div className="flex items-center justify-between mx-0">
            <RadioGroup
              defaultValue="comfortable"
              className="flex items-center gap-4 my-5"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role==='student'}
                  onChange={ChangeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role==='recruiter'}
                  onChange={ChangeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" onChange={ChangeFileHandler} className="cursor-pointer" />
            </div>
          </div>
          <Button variant="destructive" type="submit" className=" w-full my-5">
            Signup
          </Button>
          <span className="text-sm">
            Already Have an acount?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
