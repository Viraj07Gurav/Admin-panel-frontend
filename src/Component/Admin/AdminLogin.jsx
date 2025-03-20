import { useNavigate } from "react-router-dom"; // Fixed incorrect import
import axios from "axios";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast, ToastContainer } from "react-toastify";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const res = await axios.post("http://localhost:5000/admin/login", {
                email,
                password,
            });

            if (res.status === 200) {
                console.log("Admin login successful");
           
                const token = res.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("role","admin")

                localStorage.setItem("user","admin")
                navigate("/dashboard")

            }
          
        } catch (error) {
            console.error("Login failed:", error.response?.data?.message || error.message);
            toast.error("Invalid email or password"); // Show alert on failure
            
        }
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center">
            <ToastContainer position="top-center"/>
            <div className="w-full max-w-md bg-red-100 p-6 rounded-2xl shadow-lg" id="admin">
                <h2 className="text-2xl font-semibold text-center text-red-800">Admin Login</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
