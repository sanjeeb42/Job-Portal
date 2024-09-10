import mongoose, { mongo } from "mongoose";

const JobSchema=new mongoose.Schema({
    title:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
    requirements:{
        type:String,required:true
    },
    experienceLevel:{
        type:String,required:true
    },
    salary:{
        type:Number,required:true
    },
    location:{
        type:String,required:true
    },
    JobType:{
        type:String,required:true
    },
    position:{
        type:Number,required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        required:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application',
    }
},{timestamps:true});

export const Job=mongoose.model("Job",JobSchema);