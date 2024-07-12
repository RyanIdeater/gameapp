import React, { useContext, useState, useEffect } from "react";
import logo from "./../assets/images/logo.png";
import { HiOutlineMoon, HiMagnifyingGlass, HiOutlineSun } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  // Ensure the initial state of toggle matches theme
  const [toggle, setToggle] = useState(theme === "light");

  useEffect(() => {
    console.log("Theme", theme);
    // Update toggle state based on theme change
    setToggle(theme === "light");
  }, [theme]);

  return (
    <div className="flex items-center p-4 w-full md:px-20">
      <img src={logo} className="w-8 h-8 md:w-15 md:h-15" alt="Logo" />
      <div className={`flex ${toggle ? "bg-slate-200" : "bg-gray-500 bg-opacity-20"} p-2 w-full mx-5 rounded items-center`}>
        <HiMagnifyingGlass className={toggle ? "text-black" : "text-white"} />
        <input type="text" placeholder="Search Games" className={`px-2 bg-transparent outline-none w-full ${toggle ? "text-black placeholder-gray-600" : "text-white placeholder-gray-100"}`} />
      </div>
      <div>
        {toggle ? (
          <HiOutlineMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiOutlineSun
            className="text-[35px] bg-gray-500 bg-opacity-20 text-white p-1 rounded-md hover:bg-slate-200 hover:text-black transition duration-300 ease-in-out"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
