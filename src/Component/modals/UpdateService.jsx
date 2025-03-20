import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateService({ isServiceModalopen, closeServiceModal }) {
    const [title, setTitle] = useState("");
    const [titleDB,setTitleDB]=useState("");

    const updateService = async () => {
        try {
            const response = await axios.post("http://localhost:5000/service", { title });

            if (response.status === 200) {
                toast.success("Title updated successfully!");
                closeServiceModal();  // Close modal after successful update
            } else {
                toast.error("Update failed. Please try again.");
            }
        } catch (error) {
            toast.error("Error updating service. Check console.");
            console.error("Update Error:", error);
        }
    };

   

    if (!isServiceModalopen) return null; // Prevents rendering when modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <ToastContainer position="top-center"/>
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">

                {/* Close Button */}
                <button onClick={closeServiceModal} className="absolute top-2 right-2 text-xl text-gray-600">
                    ×
                </button>

                <h3 className="text-lg font-bold mb-2">Update Service</h3>

                {/* Title Input */}
                <input
                    type="text"
                    placeholder="Update Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full mb-2"
                />

                {/* Update Button */}
                <button onClick={updateService} className="bg-green-500 text-white px-4 py-2 w-full rounded-lg">
                    Update
                </button>
            </div>
        </div>
    );
}

export default UpdateService;
