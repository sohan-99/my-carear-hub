// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveApplication } from '../../utility/LocationStroage';


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id, jobs);
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    // console.log(job);

    const handleApply = () => {
        saveApplication(idInt)
        toast('You have applied Successfully')
    }
    return (
        <div>
            <h2>Job Details</h2>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Detail Coming here:</h2>
                    <p>{job.company_name}</p>
                    <h2>Job Details:{job.job_title}</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Thing</h2>
                    <button onClick={handleApply} className="btn btn-primary w-full">APPLY NOW</button>
                </div>
            </div>

            <ToastContainer />

        </div>
    );
};

export default JobDetails;