import React from 'react'
import { Link } from 'react-router';

function UserDashboard() {
    const user=localStorage.getItem("username");
    return (
        <div className="min-h-screen bg-gray-100 p-6">
              
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md flex flex-col">
            <h2 className="text-2xl font-semibold text-center mb-4">Dashboard</h2>
            <p className="text-center mb-4">Welcome to the dashboard!<span className='font-semibold text-blue-500'>{user}</span></p>
          <Link to="/" className='px-4 text-blue-500 underline text-center'>back</Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                </div>
            </div>
        </div>
    )
}

export default UserDashboard