import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    //console.log(job)
    const{ id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div>
         <div className="card w-[560px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={logo} alt="Shoes" className="rounded-xl h-[100px] w-[100px]" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="flex gap-[10px]">
    <button>{remote_or_onsite}</button>
    <button>{job_type}</button>
    </div>

    <div className="flex gap-[20px]">
    <div >
        <p className="flex items-center"><CiLocationOn />{location}</p>
    </div>
    <div>
        <p className="flex items-center"><CiDollar />salary:{salary}</p>

    </div>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}><button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Job;