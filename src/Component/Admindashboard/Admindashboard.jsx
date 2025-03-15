import React, { useContext, useState } from 'react'
import websiteContext from '../context/WebsiteContext'
import UpdateLogoModal from '../modals/UpdateLogo';
import UpdateCarouselModal from '../modals/UpdateCarousel';
import UpdateAboutModal from '../modals/UpdateAbout';

function Admindashboard() {
    const { setLogo, setAbout, updateAboutus, updateLogo, setCarouselImages, uploadCarousel } = useContext(websiteContext)
    const [logo, setNewLogo] = useState("Logo");
    const [logoname,setlogoName]=useState("logo")
    const [about, setNewAbout] = useState("");//for admin 
    const [newCarouselImages, setNewCarouselImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newlogo, setNewlogo] = useState(null);
    const [altName, setAltName] = useState("");
    const [modalCarousel, setNewCarousel] = useState([]);
    const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false);
    const [isAboutusModalopen,setIsAboutusModelOpen]=useState(false);
    const [aboutus, setNewAboutus] = useState(""); // for aboutus modal

    
    const openModal = () => {
        setIsModalOpen(true)
       
    };
    const closeModal = () => {
        setIsModalOpen(false)
     
    };
    const openCarouselModal = () => setIsCarouselModalOpen(true);
    const closeCarouselModal = () => setIsCarouselModalOpen(false);
    const  openAboutuModal=()=>{
        setIsAboutusModelOpen(true);
    }
    const closeAboutusModal=()=>{
        setIsAboutusModelOpen(false);
    }
    console.log("closeCarouselModal",isCarouselModalOpen);
    // const handleUpdate = () => {
       
    //     console.log("Alternate Name:", altName);
    //     closeModal(); // Close modal after updating
    // };


    console.log(logo);
    const handleLogoChange = async (e) => {
        e.preventDefault();
        setLogo(logo)
        // await updateLogo(logo);
        await updateLogo(newlogo,altName);
    };

    // const updateAbout = async () => {
    //     setAbout(about)
    //     setNewAbout("");
    //     if (about == null) {
    //         alert("Please enter the about us text")
    //     } else {
    //         await updateAboutus(about);
    //     }

    // }

    const handleFileChange = (e, index) => {
        const files = [...newCarouselImages]; // Copy existing images
        files[index] = e.target.files[0];  // Update the selected file at index
        setNewCarouselImages(files);
        setCarouselImages(files);
    };

    return (
        <div>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-4 text-center">Admin Panel</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1: Update Logo */}
                    <div className="bg-white shadow-lg p-4 rounded-lg relative">
                        <h3 className="text-lg font-semibold mb-2">Update Logo</h3>
                        {/* <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setNewLogo(e.target.files[0])}
                            className="border p-2 w-full mb-2" />       
                           <button onClick={handleLogoChange} className="bg-blue-500 text-white px-4 py-2 w-full  rounded-2xl ">Update</button> */}

                        <button onClick={openModal} className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">
                            Update
                        </button>

                        {/* Modal Component */}
                        <div className='relative left-10'>
                        <UpdateLogoModal
                            isOpen={isModalOpen}
                            closeModal={closeModal}
                            setNewLogo={setNewlogo}
                            setAltName={setAltName}
                            // handleUpdate={handleUpdate}
                        />
                        </div>
                    </div>




                    {/* Card 2: Update Carousel */}
                    <div className="bg-white shadow-lg p-4 rounded-lg relative">
                        <h3 className="text-lg font-semibold mb-2">Update Carousel</h3>
                        {/* {[0, 1, 2, 3].map((index) => (
                            <input
                                key={index}
                                type="file"
                                accept="image/*"
                                className="border p-2 w-full mb-2"
                                onChange={(e) => handleFileChange(e, index)}
                            />
                        ))}

                        <button onClick={uploadCarousel} className="bg-green-500 text-white mt-3 px-4 py-2 w-full rounded-2xl">
                            Update
                        </button> */}
                        <button onClick={openCarouselModal} className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">
                            Update
                        </button>


                        <UpdateCarouselModal
                           isCarouselModalOpen={isCarouselModalOpen} // Correct prop name
                           closeCarouselModal={closeCarouselModal} // Correct prop name
                           setNewCarousel={setNewCarousel}
                           setAltName={setAltName}
                        //    handleUpdate={handleUpdate} 
                       />
                       
                    </div>

                    {/* Card 3: Update About Us */}
                    <div className="bg-white shadow-lg p-4 rounded-lg relative ">
                        <h3 className="text-lg font-semibold mb-2">Update About Us</h3>
                        {/* <textarea placeholder="Update About Us text" value={about} onChange={(e) => setNewAbout(e.target.value)} className="border p-2 w-full mb-2" /> */}
                        {/* <button onClick={updateAbout} className="bg-yellow-500 text-white px-4 py-2 w-full  rounded-2xl  ">Update</button> */}
                        <button onClick={openAboutuModal} className="bg-yellow-500 text-white px-4 py-2 w-full  rounded-lg  ">Update</button>
                        <UpdateAboutModal
                        isAboutusModalopen={isAboutusModalopen}
                        closeAboutusModal={closeAboutusModal}
                        setNewAboutus={setNewAboutus}
                        
                        />

                    </div>

                    {/* Card 4, 5, 6: Empty for Future Updates */}
                    <div className="bg-gray-200 shadow-md p-4 rounded-lg flex items-center justify-center text-gray-500">Empty Card</div>
                    <div className="bg-gray-200 shadow-md p-4 rounded-lg flex items-center justify-center text-gray-500">Empty Card</div>
                    <div className="bg-gray-200 shadow-md p-4 rounded-lg flex items-center justify-center text-gray-500">Empty Card</div>
                </div>
            </div>


        </div>
    )
}

export default Admindashboard