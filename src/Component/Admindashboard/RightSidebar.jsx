import { useContext, useEffect, useState } from "react";
import WebsiteContext, { useTheme } from "../context/WebsiteContext";

export default function RightSidebar({ isOpenRightsidebar, onCloseRightsidebar }) {

  const { colorTheme , updateColor,colorFromdb,fetchcolor} = useContext(WebsiteContext)
  console.log("rihgtsidebar", isOpenRightsidebar)
  const close = () => {
    onCloseRightsidebar();
  }
  // const colors = ["bg-red-400", "bg-blue-200", "bg-green-500", "bg-yellow-400","bg-gray-100"];
  useEffect(()=>{
    fetchcolor();
  },[]);
  
  const colors = [
    { class: "bg-red-400", name: "Red" },
    { class: "bg-blue-200", name: "Blue" },
    { class: "bg-green-500", name: "Green" },
    { class: "bg-yellow-400", name: "Yellow" },
    { class: "bg-gray-100", name: "Gray" },
  ];
  const Headercolors = [
    { class: "bg-red-200", name: "Red" },
    { class: "bg-blue-200", name: "Blue" },
    { class: "bg-green-200", name: "Green" },
    { class: "bg-gradient-to-r from-[#e8ed21] via-[#f6f3cd] to-[#d9da1f]", name: "Yellow" },
   
  ];
  

  const Sidebarcolors = [
    { class: "bg-gray-200", name: "gray" },
    { class: "bg-orange-200", name: "orange" },
    { class: "bg-green-100", name: "Green" },


  ];
  const Footercolors=[{class:"bg-gray-400",name:"gray"},
    {class:"bg-gray-200",name:"[#b9b9b7]"}
  ]
  return (
    <div className="relative z-50 overflow-hidden h-screen ">
      <div
        className={`fixed right-0 pl-12 max-w-full h-screen  ${colorFromdb.sidebarcolor||"bg-gray-200"}  text-black p-5  transition-all duration-300 ${isOpenRightsidebar ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close Button */}
        <div>
          <button className="text-black " onClick={close}>
            ✖
          </button>
        </div>

        {/* Sidebar Content */}
        {/* <div className="mt-4 border rounded-2xl w-full p-2 ">
          <p>Background color</p>
          <div className="flex justify-end gap-2 ">
      
            {colors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => colorTheme(colorClass)}
                />
                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-4 border rounded-2xl w-full ">
          <p className="bg-gray-500 rounded-t-2xl">Background color</p>
          <div className="flex justify-end gap-2 p-2">
            {colors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => {
                    updateColor("bgcolor", colorClass); // Update UI locally
                    fetchcolor();
                    // updateColor("bgcolor", colorClass); // Send update to the server
                  }}
                />
                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="mt-4 border rounded-2xl w-full  ">
          <p className="bg-gray-500 rounded-t-2xl">Header color</p>
          <div className="flex justify-end gap-2 p-2">
            {Headercolors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => colorTheme(colorClass)}
                />

                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div> */}

        <div className="mt-4 border rounded-2xl w-full">
          <p className="bg-gray-500 rounded-t-2xl">Header color</p>
          <div className="flex justify-start gap-2 p-2">
            {Headercolors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => {
                    // colorTheme("headercolor", colorClass); // Update UI locally
                    updateColor("headercolor", colorClass); // Send update to the server
                    fetchcolor();
                  }}
                />
                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div>



        {/* sidebar colors */}

        {/* <div className="mt-4 border rounded-2xl w-full  ">
          <p className="bg-gray-500 rounded-t-2xl">Sidebar color</p>
          <div className="flex justify-start gap-2 p-2">
            { Sidebarcolors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => colorTheme(colorClass)}
                />

                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div> */}
        <div className="mt-4 border rounded-2xl w-full">
          <p className="bg-gray-500 rounded-t-2xl">Sidebar color</p>
          <div className="flex justify-start gap-2 p-2">
            {Sidebarcolors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => {
                    // colorTheme( colorClass); // Update theme locally
                    updateColor("sidebarcolor", colorClass); // Send update to the server
                    fetchcolor();
                  }}
                />
                <span className="text-gray-600 text-sm font-semibold mt-1">{name}</span>
              </div>
            ))}
          </div>
        </div>

          {/* footer */}
          <div className="mt-4 border rounded-2xl w-full">
          <p className="bg-gray-500 rounded-t-2xl">Footer color</p>
          <div className="flex justify-start gap-2 p-2">
            {Footercolors.map(({ class: colorClass, name }) => (
              <div key={name} className="flex flex-col items-center py-4">
                <button
                  className={`${colorClass} text-white px-2 py-2 shadow-md rounded w-10 h-8`}
                  onClick={() => {
                    // colorTheme( colorClass); // Update theme locally
                    updateColor("footercolor", colorClass); // Send update to the server
                    fetchcolor();
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

