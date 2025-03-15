import { useContext, useEffect, useState } from "react";
import WebsiteContext from "../context/WebsiteContext";
import { toast, ToastContainer } from "react-toastify";

export default function UpdateLogoModal({ isOpen, closeModal, handleUpdate }) {  //setNewlogo, setAltName
  if (!isOpen) return null; // Don't render if modal is closed

  const { updateLogo,fetchLogo } = useContext(WebsiteContext);
  const [logo, setLogo] = useState("logo")
  const [altName, setAltName] = useState("logo")

  const [selectedColor, setSelectedColor] = useState("bg-blue-600");

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleLogoChange = async (e) => {
    e.preventDefault();
    if (!altName.trim()|| !logo) {
      toast.error("All fields are required!");
      return;
  }
  else {
      // await updateLogo(logo);
      await updateLogo(logo, altName); //selectedColor
      closeModal();

    }  
  };
  useEffect(()=>{

  },[])



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-10">
      <ToastContainer position="top-center"/>
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96 relative">

        {/* Close Button (×) */}
        <button onClick={closeModal} className="absolute top-2 right-2 text-xl text-gray-600">
          ×
        </button>

        <h3 className="text-lg font-bold mb-2">Update Header Logo</h3>

        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setLogo(e.target.files[0])}
          className="border p-2 w-full mb-2"
        />

        {/* Alternate Name Input */}
        <input
          type="text"
          placeholder="Enter alternate name"
          onChange={(e) => setAltName(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        {/* <select
          onChange={handleChange}
          value={selectedColor} // ✅ Bind state to value
          className="p-2 border w-full"
        >
          <option value="bg-green-300">bg-green-300</option>
          <option value="bg-gray-600">bg-gray-600</option>
          <option value="bg-red-300">bg-red-300</option>
        </select>
         */}

        {/* Update Button */}
        <button onClick={handleLogoChange} className="bg-green-500 text-white px-4 py-2 w-full rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
}
