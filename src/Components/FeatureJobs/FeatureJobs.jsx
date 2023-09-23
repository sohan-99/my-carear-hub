import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    // not  to right way to data load 
    const [dataLength, setdataLength] = useState(4)


    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-6xl text-center p-3">Feature Jobs : {jobs.length}</h2>
                <p className="text-center p-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={() => setdataLength(jobs.length)} className="btn btn-primary mt=2">Show All Jobs</button>
            </div>
        </div>

    );
};

export default FeatureJobs;


