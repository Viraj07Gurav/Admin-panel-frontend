import { useContext, useState } from "react";
import WebsiteContext from "../context/WebsiteContext";
import { toast, ToastContainer } from "react-toastify";

export default function UpdateAboutModal({ isAboutusModalopen, closeAboutusModal }) {
    if (!isAboutusModalopen) return null; // Don't render if modal is closed

    const { updateAboutus } = useContext(WebsiteContext);
    const [title, setTitle] = useState("");
    const [descAboutus, setDescAboutus] = useState("");
    const [image, setImage] = useState(null);

    const updateAbout = async () => {
        // Check if all fields are filled
        if (!title.trim() || !descAboutus.trim() || !image) {
            toast.error("All fields are required!");
            return;
        }

        await updateAboutus(title, descAboutus, image);
        closeAboutusModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-10">
            <ToastContainer position="top-center"/>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96 relative">

                {/* Close Button (×) */}
                <button onClick={closeAboutusModal} className="absolute top-2 right-2 text-xl text-gray-600">
                    ×
                </button>

                <h3 className="text-lg font-bold mb-2">Update About Us</h3>

                {/* Title Input */}
                <input
                    type="text"
                    placeholder="Update Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border p-2 w-full mb-2"
                />

                {/* Description Input */}
                <input
                    type="text"
                    placeholder="Update About Us description"
                    value={descAboutus}
                    onChange={(e) => setDescAboutus(e.target.value)}
                    className="border p-2 w-full mb-2"
                />

                {/* File Input */}
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="border p-2 w-full mb-2"
                />

                {/* Update Button */}
                <button onClick={updateAbout} className="bg-green-500 text-white px-4 py-2 w-full rounded-lg">
                    Update
                </button>
            </div>
        </div>
    );
}
