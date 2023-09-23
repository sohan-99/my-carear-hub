/* eslint-disable react/prop-types */

import { MdLocationOn } from 'react-icons/md';
import { CiDollar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
// import React from 'react';
const Job = ({ job }) => {
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl items-start ">
            <figure className='text-left items-start mb-4 ml-3'><img  src={logo} /></figure>
                <h2 className=" card-title ml-1">{job_title}</h2>
            <div className="card-body  ">
                <p>{company_name}</p>
                <div className='mt-1'>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90Fe] mr-4 text-[#7E90Fe]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90Fe] text-[#7E90Fe] mr-4">{job_type}</button>
                </div>
                <div className='mt-3 flex space-x-2'>
                    <h2 className='flex text-[#757575]'><MdLocationOn className='text-2xl mr-2'></MdLocationOn>{location}</h2>
                    <h2 className='flex text-[#757575]'><CiDollar className='text-2xl mr-2'></CiDollar>{salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}>
                    <button className="btn bg-[#9873FF]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;

