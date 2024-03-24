//import { useEffect } from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//import { getStoredJobApplication } from "../../Utility/localStroage";


const Applied = () => {

    const [jobs, setJobs] =useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])
    //const jobs = useLoaderData();
    //console.log(jobs)
    // useEffect(()=>{
    //     const storedJobIds = getStoredJobApplication();
    //     if(jobs.length>0){
    //         const jobApplied = jobs. filter(job =>storedJobIds.includes(job.id));
    //     }
    // },[])

  
    return (
        <div>
            <h2>this is a sesction where i jobs applied</h2>
            
        </div>
    );
};

export default Applied;