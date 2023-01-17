//! Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//! Context
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

//! Pages & Components
import Home from "./components/pages/Home";
import Update from "./components/pages/Update";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

//! AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  setTimeout(() => {
    AOS.refresh();
  }, 500);

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? "dark" : "light"}>
      <div className="dark:bg-slate-800 bg-gray-200 text-black duration-300">
        <BrowserRouter>
          <Navbar />
          {/*//! <-- Routes -->  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
          {/*//! <------------>  */}
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
