
import { useContext ,useState} from "react";
import WebsiteContext, { useTheme } from "../context/WebsiteContext";

export default function ColorSwitcher() {
//   const { setColor } = useTheme();

const{colorTheme}=useContext(WebsiteContext)
const [showColors, setShowColors] = useState(false); // Toggle state


//   const colors = [
//     { name: "Blue", class: "bg-blue-500" },
//     { name: "Red", class: "bg-red-500" },
//     { name: "Green", class: "bg-green-500" },
//     { name: "Yellow", class: "bg-yellow-500" },
//   ];
const colors = ["bg-red-400", "bg-blue-200", "bg-green-500", "bg-yellow-400","bg-gray-100"];

    
return (
    // <div className="p-2 absolute z-20 right-0">
    // <div className="flex justify-end gap-2 ">
    //     {colors.map((c) => (
    //     <button
    //         key={c}
    //         className={`${c} text-white px-2 py-2 border-1 border-black  rounded-full  w-6 h-6 `}
    //         onClick={() => colorTheme(c)}
    //     >
        
    //     </button>
    //     ))}
    // </div>
    // </div>


    <div className="p-2 absolute z-100 right-0 ">
      {/* Color Buttons (Left Side) - Shown Only When `showColors` is true */}
      {showColors && (
        <div className="absolute left-[-100px] md:left-[-130px] flex gap-2">
          {colors.map((c) => (
            <button
              key={c}
              className={`${c} text-white px-2  md:px-2 py-2 rounded-full w-4 h-4 md:w-6 md:h-6 border border-gray-800`}
              onClick={() => colorTheme(c)}
            ></button>
          ))}
        </div>
      )}

      {/* Toggle Button (SVG Icon) */}
      <button onClick={() => setShowColors(!showColors)} className="relative z-10 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdCogFilledLoop0"><defs><symbol id="lineMdCogFilledLoop1"><path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><animate fill="freeze" attributeName="d" begin="0.175s" dur="0.07s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"/></path></symbol></defs><g fill="none" stroke="#fff" stroke-width="2"><path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.175s" values="36;0"/><set fill="freeze" attributeName="opacity" begin="0.175s" to="0"/></path><g fill="#fff" stroke="none" opacity="0"><use href="#lineMdCogFilledLoop1"/><use href="#lineMdCogFilledLoop1" transform="rotate(60 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(120 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(180 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(240 12 12)"/><use href="#lineMdCogFilledLoop1" transform="rotate(300 12 12)"/><set fill="freeze" attributeName="opacity" begin="0.175s" to="1"/><animateTransform fill="freeze" attributeName="transform" dur="10.5s" type="rotate" values="0 12 12;360 12 12"/></g></g><circle cx="12" cy="12" r="3.5"/></mask><rect width="24" height="24" fill="#41bfd9" mask="url(#lineMdCogFilledLoop0)"/></svg>

      </button>
    </div>
)

}
