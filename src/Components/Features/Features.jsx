import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Features = () => {

    const[jobs, setJobs]= useState([]);

    const [dataLength, setDataLength]= useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center my-[50px]">
                <h1 className="text-5xl">Features of Jobs:{jobs.length}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis fugit voluptate, officia voluptates ulla</p>
            </div>
            <div  className="grid grid-cols-2 gap-[16px]">
                {
                    jobs.slice(0, dataLength).map(job=><Job key ={job.id} job={job}></Job>)
                }
            </div>

            <div className={dataLength===jobs.length ? 'hidden' : ''}>
            <button  onClick={()=>setDataLength(jobs.length)} className="btn mt-[50px] mb-[100px] ml-[550px] btn-primary">Primary</button>
            </div>
            
        </div>
    );
};

export default Features;