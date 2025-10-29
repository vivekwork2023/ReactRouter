import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            {/* when ever any route is accessed in the app.jsx, first the Navbar will open then the component selected will be open in placee of Outlet */}
        </div>
    )
}

// So from the Navbar only the roots are set, but where those navigations are redirecting will be decided by the RootLayout
export default RootLayout