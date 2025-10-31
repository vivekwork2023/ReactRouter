import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Job = () => {

    const jobsdata = useLoaderData();

    return (
        <div>
            {
                jobsdata.map( job => {
                    return <ul key={job.id} className='boxed'>
                        <li>{job.title}</li>
                        <li>{job.salary}</li>
                        <br />
                    </ul>
                })
            }
        </div>
    )
}

export default Job

// we will add a loader function
// When we are getting data from the backend we might use useEffect, but will also handle using this ReactLoader

export const jobLoader = async () => {
    // add the api link

    const res = await fetch("http://localhost:5000/jobs");
    return res.json();
}