import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


// Create Context
const WebsiteContext = createContext();

// Create Provider Component
export function WebsiteProvider({ children }) {
  const [logo, setLogo] = useState("Logo");
  const [about, setAbout] = useState("");
  const [aboutImage, setImage] = useState("")
  const [carouselImages, setCarouselImages] = useState([]);
  const [aboutus, setAboutus] = useState("")
  const [dblogo, setDblogo] = useState("")
  const [carousel, setCarousel] = useState([]);
  const bgcolor = localStorage.getItem("bgcolor");
  const [colorFromdb,setColorFromdb]=useState("");

console.log("colorfromdbcontext",colorFromdb);
  console.log("context", logo);

  // const updateAboutus = async (title,descAboutus,image) => {
  //    // console.log("adminupdated data", aboutus);
  //   const res = await axios.post("http://localhost:5000/update", {title,descAboutus,image });
  //   console.log("About us updated");
  //   if (res.status === 200) {
  //     console.log("About us updated");
  //   }

  // }

  //updated about us 
  const updateAboutus = async (title, descAboutus, imageFile) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("descAboutus", descAboutus);
      formData.append("image", imageFile); // Append the image file

      const res = await axios.post("http://localhost:5000/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      });

      if (res.status === 200) {
        console.log("About us updated successfully:", res.data);
      }
    } catch (error) {
      console.error("Error updating About Us:", error);
    }
  };

  // update logo

  const updateLogo = async (logoFile, altName) => {
    try {
      if (!logoFile) {
        console.error("No file selected");
        return;
      }


      const formData = new FormData();
      formData.append("logo", logoFile); // Key should match the backend `req.file` field
      formData.append("altName", altName);
      // formData.append("selectedColor", selectedColor);

      const res = await axios.post("http://localhost:5000/logo", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });
      console.log("res", res);
      if (res.status === 200) {
        console.log("Logo updated successfully:", res.data);
      }
    } catch (error) {
      console.error("Error updating logo:", error);
    }
  };

  //updated crousel post method
  const uploadCarousel = async () => {
    if (carouselImages.length < 4 || carouselImages.includes(undefined)) {
      alert("Please select all 4 images.");
      return;
    }

    const formData = new FormData();
    carouselImages.forEach(file => formData.append("carousel", file));

    try {
      const res = await axios.post("http://localhost:5000/carousel", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Carousel updated successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images.");
    }
  };

  //fetch last recordd for abbout us section get method to display data on website
  const fetchLastRecord = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lastrecord");
      const data = await response.data;
      console.log("lastrecord", data)
      if (response.status === 200) {
        setAboutus(data);


        console.log("description", data.description);

        console.log("Last record fetched successfully:", data);
      }
      return data;
    } catch (error) {
      console.error("Error fetching last record:", error);
    }
  }
  //=======fetch logo from database and display 
  // const fetchLastLogo = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/fetchLogo", {
  //       responseType: "blob", // Fetch as binary image
  //     });

  //     console.log("Full Response:", response);
  //     console.log("Blob size received:", response.data.size);

  //     if (response.status === 200 && response.data.size > 0) {
  //       const imageUrl = URL.createObjectURL(response.data);
  //       setDblogo(imageUrl);
  //     } else {
  //       console.error("Received invalid image data.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching last logo:", error);
  //   }
  // };

  const fetchLastLogo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/fetchLogo");

      console.log("API Response:", response.data); // ✅ Check if API returns correct JSON

      if (response.status === 200 && response.data) {
        setDblogo(response.data); // ✅ Store entire response object
      } else {
        console.error("Invalid response received.");
      }
    } catch (error) {
      console.error("Error fetching last logo:", error);
    }
  };

  console.log('cdscnj', dblogo)

  //=========== fetch craousel images ==============//

  const fetchCarouselImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/fetchCarouselImages");
      console.log("response carousel", response);

      if (response.status === 200) {
        const imageArray = JSON.parse(response.data.image); // Parse JSON string
        console.log("array carousel", imageArray)
        setCarousel(imageArray);
      } else {
        console.error("Error fetching carousel images");
      }
    } catch (error) {
      console.error("Error fetching carousel images", error);
    }
  };

  // const fetchCarouselImages = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/fetchCarouselImages");
  //     console.log("response carousel", response);

  //     if (response.status === 200) {
  //       const imageArray = JSON.parse(response.data.image); // Parse JSON string
  //       console.log("array carousel", imageArray);

  //       // Check image size using Blob
  //       const imagesWithSize = await Promise.all(
  //         imageArray.map(async (src) => {
  //           try {
  //             const imageResponse = await fetch(src); // Fetch full image
  //             const blob = await imageResponse.blob(); // Convert to Blob
  //             const size = blob.size; // Get size in bytes
  //             return { src, size };
  //           } catch (error) {
  //             console.error("Error fetching image size:", error);
  //             return { src, size: "Unknown" };
  //           }
  //         })
  //       );

  //       console.log("Image sizes:", imagesWithSize);
  //       setCarousel(imageArray);
  //     } else {
  //       console.error("Error fetching carousel images");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching carousel images", error);
  //   }
  // };
  //color swithcer part
  const [color, setColor] = useState('bg-white')
  const colorTheme = (color) => {

    setColor(color);
    localStorage.setItem("bgcolor", color);
    // axios.post("http://localhost:5000/updateColor", {color})
    // .then(response => console.log(response.data.message))
    // .catch(error => console.error("Error updating color:", error));
  }


  // Declare state variables
const [bgColor, setBgColor] = useState("");
const [headerColor, setHeaderColor] = useState("");
const [sidebarColor, setSidebarColor] = useState("");

const updateColor = (type, color) => {
  // Update state first
  if (type === "bgcolor") setBgColor(color);
  if (type === "headercolor") setHeaderColor(color);
  if (type === "sidebarcolor") setSidebarColor(color);

  // Use updated state values after setting state
  const updatedColors = {
    bgcolor: type === "bgcolor" ? color : bgColor,
    headercolor: type === "headercolor" ? color : headerColor,
    sidebarcolor: type === "sidebarcolor" ? color : sidebarColor,
  };

  console.log("Updated Colors:", updatedColors);

  // Send updated colors to server
  axios
    .post("http://localhost:5000/updateColor", updatedColors)
    .then((response) => console.log(response.data.message))
    .catch((error) => console.error("Error updating color:", error));
};





const fetchcolor=()=>{
  axios.get("http://localhost:5000/getColors")
  .then(response => {
     setColorFromdb(response.data);
     
  })
  .catch(error => console.error("Error fetching color:", error));
}



  return (
    <WebsiteContext.Provider value={{ logo, setLogo, about, setAbout, updateAboutus, updateLogo, setCarouselImages, uploadCarousel, fetchLastRecord, aboutus, fetchLastLogo, dblogo, carousel, fetchCarouselImages, aboutImage, colorTheme, color, updateColor,colorFromdb,setColorFromdb,fetchcolor }}>
      {children}
    </WebsiteContext.Provider>
  );
}

// Export Context
export default WebsiteContext;

export function useTheme() {
  return useContext(WebsiteContext);
}
