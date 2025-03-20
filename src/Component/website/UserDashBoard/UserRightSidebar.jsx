import { useContext, useEffect, useState } from "react";
import WebsiteContext from "../../context/WebsiteContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { CodeSquare } from "lucide-react";
import UserContext from "../../context/userContext";



export default function UserRightSidebar({ isOpenRightsidebar, onCloseRightsidebar }) {

    const { colorTheme, updateColor, colorFromdb, fetchcolor } = useContext(WebsiteContext)
    const { userTheme, setUserTheme } = useContext(UserContext)
    console.log("rihgtsidebar", isOpenRightsidebar)
    const [headercolor, setHeaderColor] = useState("");
    const [bgcolor, setBgColor] = useState("")
    const [footercolor, setFootercolor] = useState("")
    const [themecolors, setThemecolors] = useState("")

    const close = () => {
        onCloseRightsidebar();
    }
    const token = localStorage.getItem("token"); // ✅ Get token from local storage
    let userId = null; // ✅ Declare variable to store userId

    if (token) {
        try {

            const decoded = jwtDecode(token); // ✅ Decode token
            userId = decoded.id; // ✅ Store userId in variable
        } catch (error) {
            console.error("Invalid token:", error);
        }
    }

    console.log("User ID:", userId); // ✅ Use the userId variable anywhere

    const updateTheme = async (userId, type, color) => {
        // Update state first
        if (type === "bgcolor") setBgColor(color);
        if (type === "headercolor") setHeaderColor(color);
        if (type === "footercolor") setFootercolor(color);
        // Use updated state values after setting state
        const updatedColors = {
            userId: userId,
            bgcolor: type === "bgcolor" ? color : bgcolor,
            headercolor: type === "headercolor" ? color : headercolor,
            footercolor: type === "footercolor" ? color : footercolor,
        };
        console.log(updatedColors);

        const res = await axios.post("http://localhost:5000/usertheme", updatedColors)
        fetchTheme()
        if (res.status == 200) {
            console.log("color updated ")
        } else {
            console.log("failed to update theme color")
        }
    }
    let response = null;
    // const fetchTheme = async () => {
    //     try {
    //         const res = await axios.get(`http://localhost:5000/getuserthemecolor?userId=${userId}`);
    //         if (res.status === 200) {
    //             setThemecolors(res.data)
    //             setUserTheme(res.data)
    //         }
    //     } catch (error) {
    //         console.error("Error fetching theme:", error);
    //     }
    // };
    const [refresh, setRefresh] = useState(false)
    console.log("refresh", refresh);
    // useEffect(() => {
    //     const fetchTheme = async () => {
    //         try {
    //             const res = await axios.get(`http://localhost:5000/getuserthemecolor?userId=${userId}`);
    //             if (res.status === 200) {
    //                 setThemecolors(res.data);
    //                 setUserTheme(res.data);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching theme:", error);
    //         }
    //     };

    //     fetchTheme(); // Call the async function inside useEffect
    // }, [refresh]); // Runs whenever userId changes
    const fetchTheme = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/getuserthemecolor?userId=${userId}`);
            if (res.status === 200) {
                setUserTheme(res.data);
                console.log("console for user panel color", res.data);
            }
        } catch (error) {
            console.error("Error fetching theme:", error);
        }
    };


    useEffect(() => {
        fetchTheme();
        userTheme
    }, [refresh]); // useEffect runs when 'refresh' changes


    // Function to manually trigger useEffect
    const fetchThemeManually = () => {
        setRefresh((prev) => !prev); // Toggle refresh state to trigger useEffect
    };


    console.log("bg color user", userTheme.bgcolor)

    console.log(themecolors);

    // const colors = ["bg-red-400", "bg-blue-200", "bg-green-500", "bg-yellow-400","bg-gray-100"];
    const colors = [
        { class: "bg-red-400", name: "Red" },
        { class: "bg-blue-200", name: "Blue" },
        { class: "bg-gradient-to-r from-[#43a039] via-[#bee899] to-[#43a039]", name: "Green" },
        { class: "bg-gradient-to-r from-[#e8ed21] via-[#f3f3cd] to-[#f2f334]", name: "Yellow" },
        { class: "bg-gray-100", name: "Gray" },
    ];
    const Headercolors = [
        { class: "bg-red-200", name: "Red" },
        { class: "bg-blue-200", name: "Blue" },
        { class: "bg-green-200", name: "Green" },
        { class: "bg-yellow-200", name: "Yellow" },

    ];

    const Sidebarcolors = [
        { class: "bg-gray-200", name: "gray" },
        { class: "bg-orange-200", name: "orange" },
        { class: "bg-green-100", name: "Green" },


    ];
    return (
        <div className="relative z-50 overflow-hidden h-screen ">
            <div
                className={`fixed right-0 pl-12 max-w-full h-screen  ${userTheme.footercolor || "bg-gray-200"}  text-black p-5  transition-all duration-300 ${isOpenRightsidebar ? "translate-x-0" : "translate-x-full"
                    }`}
                //userTheme.footercolor am using color for sidebar
            >
                {/* Close Button */}
                <div>
                    <button className="text-black " onClick={close}>
                        ✖
                    </button>
                </div>
                <div className="mt-4 border rounded-2xl w-full ">
                    <p className="bg-gray-500 rounded-t-2xl text-center">Background color</p>
                    <div className="flex justify-end gap-2 p-2">
                        {colors.map(({ class: colorClass, name }) => (
                            <div key={name} className="flex flex-col items-center py-4">
                                <button
                                    className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                                    onClick={() => {
                                        updateTheme(userId, "bgcolor", colorClass); // Update UI locally
                                        // fetchcolor();
                                        // updateColor("bgcolor", colorClass); // Send update to the server
                                        // setBgColor(colorClass);
                                        // fetchTheme();
                                        // fetchThemeManually();
                                    }}
                                />
                                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4 border rounded-2xl w-full">
                    <p className="bg-gray-500 rounded-t-2xl text-center">Header color</p>
                    <div className="flex justify-start gap-2 p-2">
                        {Headercolors.map(({ class: colorClass, name }) => (
                            <div key={name} className="flex flex-col items-center py-4">
                                <button
                                    className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8 hover:scale-110`}
                                    onClick={() => {
                                        // colorTheme("headercolor", colorClass); // Update UI locally
                                        updateTheme(userId, "headercolor", colorClass); // Send update to the server
                                        // fetchTheme()
                                        // fetchThemeManually();

                                    }}
                                />
                                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 border rounded-2xl w-full ">
                    <p className="bg-gray-500 rounded-t-2xl text-center">Footer color</p>
                    <div className="flex justify-start gap-2 p-2">
                        {Sidebarcolors.map(({ class: colorClass, name }) => (
                            <div key={name} className="flex flex-col items-center py-4">
                                <button
                                    className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                                    onClick={() => {

                                        updateTheme(userId, "footercolor", colorClass);


                                    }}
                                />
                                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

