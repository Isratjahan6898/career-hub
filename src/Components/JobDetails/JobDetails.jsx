import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStroage";

const JobDetails = () => {
    
    const jobs = useLoaderData();
    const {id}= useParams();
    const idInt = parseInt(id);
    const job = jobs.find (job => job.id ===idInt)

    saveJobApplication(idInt);

    const notify = () => toast("You applied sucessfully!");
    //console.log(job)
    return (
        <div>
            <h1>job details of:{job.job_title}</h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="border col-span-3">
                    <h1>Job Description:{job.job_description}</h1>
                    <h1>Job Responsibility:{job.job_responsibility}</h1>
                    <h1>Educationcal Requirement:{job.educational_requirement}</h1>
                    <h1>Experience:{job.experience}</h1>

                </div>
                <div className="border">
                    <h1> Job details</h1>
                    <hr></hr>
                    <h1>Salary:{job.salary}</h1>
                    <h1>Job Title:{job.job_title}</h1>
                    <h1>Contact Information</h1>
                    <hr></hr>
                    <p>Phone:{job.contact_information.phone}</p>
                    <p>Email:{job.contact_information.email}</p>
                    <p>Address:{job.contact_information.address}</p>
                    <button onClick={notify} className="btn-primary bg-cyan-500 ">Apply now</button>

                </div>
            </div>
            <ToastContainer />
            
        </div>
    );
};

export default JobDetails;