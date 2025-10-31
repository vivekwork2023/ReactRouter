import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const JobDetails = () => {

    const {id} = useParams();
    // this name id should match with the name given in the App.jsx
    // <Route path=':id' element={<JobDetails/>} />

    const jobDetialsData = useLoaderData();

  return (
    <div>
        {/* we need to fetch the id from the url*/}

        <h2>Job Title : { jobDetialsData.title } </h2>
        <h3> Salary : {jobDetialsData.salary}</h3>


    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async( {params} ) => {
    
    const {id} = params;
    const res = await fetch("http://localhost:5000/jobs/" + id );
    return res.json();
}