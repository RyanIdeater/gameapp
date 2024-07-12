import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Set default theme if localStorage is empty
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme === "dark" ? "bg-[#121212] text-white" : ""} min-h-screen`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
