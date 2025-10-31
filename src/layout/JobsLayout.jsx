import React from 'react'
import { Outlet } from 'react-router-dom';

const JobsLayout = () => {
  return (
    <div>
        <h1>Jobs Opening</h1>
        <Outlet/>
    </div>
  );
}

export default JobsLayout