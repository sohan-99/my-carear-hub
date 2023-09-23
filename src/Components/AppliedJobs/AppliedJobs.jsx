import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStroageApplication } from "../../utility/LocationStroage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])

    useEffect(() => {
        const storedJobsIds = getStroageApplication();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id));
            const jobApplied = []
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id)
                if (job) {
                    jobApplied.push(job);
                }
            }
            setAppliedJobs(jobApplied)
            // console.log(jobs, storedJobsIds, jobApplied);
        }


    }, [jobs])
    return (
        <div>
            <h2 className="text-2xl">jobs i applied:{appliedJobs.length}</h2>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id} ><span>{job.job_title} <br></br> {job.company_name}</span> </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;


