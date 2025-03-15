import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Component/context/Authcontext";
import { useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import Admindashboard from "./Admindashboard/Admindashboard";
import { Link } from "react-router-dom";
import ColorSwitcher from "./Admindashboard/ColorSwitcher";
import WebsiteContext, { useTheme } from "./context/WebsiteContext";
import RightSidebar from "./Admindashboard/RightSidebar";
import ThemeSidebar from "./Admindashboard/Test";
import axios from "axios";

// import RightSidebar from "./Admindashboard/RightSidebar";


const Dashboard = () => {
    const { logout } = useContext(AuthContext);
    const { colorFromdb, setColorFromdb } = useContext(WebsiteContext)
    console.log("colorfromdbdcsac", colorFromdb)

    const { color } = useTheme()
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0)
    const [isrightSidebaropen, setIsRightsidebar] = useState(false);
    const role = localStorage.getItem("role");
    console.log("usethem", color);
    // Fetch all users when the component loads
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.error("Error fetching users:", err));
    }, []);
   

    // Handle Delete User
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" });
            setUsers(users.filter(user => user.id !== id)); // Remove user from UI
        }
    };

    // Handle Update User
    const handleUpdate = (id) => {
        navigate(`/Users/${id}`);
    };

    // Handle Logout
    const handleLogout = async () => {
        await logout();
        navigate("/");
    };
    const handleUsers = () => {
        navigate("/userdata")
    }

    const openRightSidebar = () => {
        setIsRightsidebar(true)

    };
    const closeRightSidebar = () => {
        setIsRightsidebar(false)

    };
    console.log("rightsideBaar", isrightSidebaropen)
    return (
        <div className="min-h-screen bg-gray-100  ">


            <div className={`max-w-full  mx-auto  ${colorFromdb.bgcolor} rounded-lg shadow-md  relative`}>

                <div className="rounded-lg shadow-md flex  relative">

                    {/* <ColorSwitcher/> */}
                    <Sidebar />
                    {/* Right Sidebar */}

                    <RightSidebar isOpenRightsidebar={isrightSidebaropen} onCloseRightsidebar={closeRightSidebar} />
                    {/* <ThemeSidebar /> */}

                    <div className="w-full">
                        <div className={`${colorFromdb.headercolor} p-4 relative  shadow-lg text-center z-30 max-w-full`}>
                            <h1 className={``}>Navbar <button onClick={() => openRightSidebar()} className="relative inline z-10 float-right top-0 animate-spin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCogFilledLoop0"><defs><symbol id="lineMdCogFilledLoop1"><path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><animate fill="freeze" attributeName="d" begin="0.175s" dur="0.07s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z" /></path></symbol></defs><g fill="none" stroke="#fff" stroke-width="2"><path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.175s" values="36;0" /><set fill="freeze" attributeName="opacity" begin="0.175s" to="0" /></path><g fill="#fff" stroke="none" opacity="0"><use href="#lineMdCogFilledLoop1" /><use href="#lineMdCogFilledLoop1" transform="rotate(60 12 12)" /><use href="#lineMdCogFilledLoop1" transform="rotate(120 12 12)" /><use href="#lineMdCogFilledLoop1" transform="rotate(180 12 12)" /><use href="#lineMdCogFilledLoop1" transform="rotate(240 12 12)" /><use href="#lineMdCogFilledLoop1" transform="rotate(300 12 12)" /><set fill="freeze" attributeName="opacity" begin="0.175s" to="1" /><animateTransform fill="freeze" attributeName="transform" dur="10.5s" type="rotate" values="0 12 12;360 12 12" /></g></g><circle cx="12" cy="12" r="3.5" /></mask><rect width="24" height="24" fill="#41bfd9" mask="url(#lineMdCogFilledLoop0)" /></svg>

                            </button>
                            </h1>

                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-center mb-4 text-purple-500">Dashboard</h2>
                            <p className="text-center mb-4">Welcome to the dashboard!</p>
                            <div className="text-center mb-4">
                                {role === "admin" && <h3 className="text-xl font-semibold">Total Users: {users.length}</h3>}
                                {/* {role === "admin" && <button onClick={handleUsers} className="border bg-red-400 text-white w-30 rounded-2xl">See All Users</button>} */}
                            </div>
                            {/* Users Table */}


                            {/* Logout Button */}
                            <div className="text-center mt-4">
                                {/* <button onClick={handleLogout} className="border bg-green-400 text-white w-20 rounded-2xl">
                        Logout
                    </button> */}
                            </div>
                            <div>
                                {role === "admin" && <Admindashboard />}
                            </div>
                            <Link to="/" className="text-center text-blue-500 border-b mt-4">Go to Website</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
