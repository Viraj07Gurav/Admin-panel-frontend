import { useContext, useState } from "react";
import WebsiteContext from "../context/WebsiteContext";
import { toast, ToastContainer } from "react-toastify";

export default function UpdateCarouselModal({ isCarouselModalOpen, closeCarouselModal, setNewCarousel, setAltName }) {
  if (!isCarouselModalOpen) return null; // Don't render if modal is closed
  const { uploadCarousel, setCarouselImages } = useContext(WebsiteContext);

  const [newCarouselImages, setNewCarouselImages] = useState([null, null, null, null]);
  const [altText, setAltText] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e, index) => {
    const files = [...newCarouselImages];
    files[index] = e.target.files[0]; // Update the selected file at index
    setNewCarouselImages(files);
    setCarouselImages(files);
  };

  const handleUpdate = () => {
    if (newCarouselImages.includes(null) || !altText.trim()) {
      toast.error("All fields are required.");
      setError("All fields are required.");
      return;
    }
    setError("");
    uploadCarousel();
    closeCarouselModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-10 ">
      <ToastContainer position="top-center"/>
      <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button (×) */}
        <button onClick={closeCarouselModal} className="absolute top-2 right-2 text-xl text-gray-600">
          ×
        </button>

        <h3 className="text-lg font-bold mb-2">Update Carousel Image</h3>

        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            type="file"
            accept="image/*"
            className="border p-2 w-full mb-2"
            onChange={(e) => handleFileChange(e, index)}
          />
        ))}

        {/* Alternate Name Input */}
        <input
          type="text"
          placeholder="Enter alternate name"
          value={altText}
          onChange={(e) => {
            setAltText(e.target.value);
            setAltName(e.target.value);
          }}
          className="border p-2 w-full mb-2"
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Update Button */}
        <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 w-full rounded-lg">
          Update
        </button>
      </div>
    </div>
  );
}
