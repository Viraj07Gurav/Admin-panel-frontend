import { useState } from "react";


export default function ThemeSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("bg-gray-200"); // Default theme

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${theme} z-10`}>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-5 right-5 z-50 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Theme"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <h2 className="text-xl font-bold mb-4">Choose Theme</h2>

          {/* Theme Color Options */}
          <div className="flex gap-3">
            <button
              className="w-8 h-8 bg-red-500 rounded-full"
              onClick={() => setTheme("bg-red-500")}
            ></button>
            <button
              className="w-8 h-8 bg-green-500 rounded-full"
              onClick={() => setTheme("bg-green-500")}
            ></button>
            <button
              className="w-8 h-8 bg-blue-500 rounded-full"
              onClick={() => setTheme("bg-blue-500")}
            ></button>
            <button
              className="w-8 h-8 bg-yellow-500 rounded-full"
              onClick={() => setTheme("bg-yellow-500")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
