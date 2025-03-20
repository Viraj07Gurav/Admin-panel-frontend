import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router';
import UserSidebar from './UserSidebar';
import UserRightSidebar from './UserRightSidebar';
import UserContext from '../../context/userContext';

function UserDashboard() {
    const user = localStorage.getItem("username");
    const [isrightSidebaropen, setIsRightsidebar] = useState(false);
    const { userTheme, setUserTheme } = useContext(UserContext)
    console.log("console from userDashboard", userTheme)

    const openRightSidebar = () => {
        setIsRightsidebar(true)

    };
    const closeRightSidebar = () => {
        setIsRightsidebar(false)

    };
    console.log("userdashboard bg color",userTheme.bgcolor);
    return (
        <div className="min-h-screen  bg-gray-100 ">

            <div className={`max-w-full min-h-screen mx-auto ${userTheme.bgcolor}  rounded-lg shadow-md flex  relative  transition-all duration-500`}>
                <UserSidebar />
                <UserRightSidebar isOpenRightsidebar={isrightSidebaropen} onCloseRightsidebar={closeRightSidebar} />
                <div className='w-full'>
                    <div className=''>
                        <h1 className={`${userTheme.headercolor} ||bg-red-500 h-15  transition-all duration-300`}>Navbar <button className="relative inline z-10 float-right top-0  p-2  " onClick={() => openRightSidebar()}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCogFilledLoop0"><defs><symbol id="lineMdCogFilledLoop1"><path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><animate fill="freeze" attributeName="d" begin="0.175s" dur="0.07s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"/></path></symbol></defs><g fill="none" stroke="#fff" stroke-width="2"><path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.175s" values="36;0"/><set fill="freeze" attributeName="opacity" begin="0.175s" to="0"/></path><g fill="#fff" stroke="none" opacity="0"><use href="#lineMdCogFilledLoop1"/><use href="#lineMdCogFilledLoop1" transform="rotate(60 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(120 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(180 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(240 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(300 12 12)"/><set fill="freeze" attributeName="opacity" begin="0.175s" to="1"/><animateTransform fill="freeze" attributeName="transform" dur="10.5s" type="rotate" values="0 12 12;360 12 12"/></g></g><circle cx="12" cy="12" r="3.5"/></mask><rect width="24" height="24" fill="#000" mask="url(#lineMdCogFilledLoop0)"/></svg>

                            </button>
                        </h1>

                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-4">Dashboard</h2>
                    <p className="text-center mb-4">Welcome to the dashboard!<span className='font-semibold text-blue-500'>{user}</span></p>
                    <Link to="/" className='px-4 text-blue-500 underline text-center'>back</Link>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

                        <div className="bg-gray-200 shadow-md p-4 rounded-lg flex items-center justify-center text-gray-500">Empty Card</div>
                        <div className="bg-gray-200 shadow-md p-4 rounded-lg flex items-center justify-center text-gray-500">Empty Card</div>
                        <div className="bg-gray-200 shadow-md p-4 rounded-lg flex items-center justify-center text-gray-500">Empty Card</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDashboard