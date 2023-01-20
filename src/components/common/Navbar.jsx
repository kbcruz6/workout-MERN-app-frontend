import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

const Navbar = () => {
  const { checked, onToggle } = useContext(ThemeContext);

  return (
    <div className="w-full z-10 fixed flex flex-row p-3 justify-between sm:px-20 px-10 shadow-md shadow-slate-500 items-center bg-gray-100 dark:bg-slate-900 dark:text-white dark:shadow-black duration-300">
      <div data-aos="fade" data-aos-duration="2000" data-aos-delay="100">
        <h1 className="font-bold sm:text-3xl text-xl duration-300">
          Beast Workout
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 font-bold">
        {/*//! HOME  */}
        <div data-aos="fade" data-aos-duration="2000" data-aos-delay="100">
          <Link to="/">
            <p className=" duration-300 rounded-full px-2 py-1 hover:bg-slate-400 hover:text-white dark:hover:bg-slate-700 ">
              Home
            </p>
          </Link>
        </div>
        {/*//! TOGGLE SWITCH  */}
        <div
          data-aos="fade"
          data-aos-duration="2000"
          data-aos-delay="100"
          className="relative group hover:opacity-90 px-0 mx-2"
        >
          <input
            onChange={onToggle}
            id="switch"
            type="checkbox"
            className="switch-checkbox hidden"
            checked={checked}
          />
          <label
            className={
              checked
                ? "switch-label flex items-center bg-slate-400 w-[45px] h-[25px] rounded-full relative cursor-pointer"
                : "switch-label flex items-center bg-slate-500 w-[45px] h-[25px] rounded-full relative cursor-pointer"
            }
            htmlFor="switch"
          >
            <span
              className={
                checked
                  ? "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[3px] flex justify-start items-center bg-slate-100 p-[2px]"
                  : "switch-button w-[20px] relative h-[20px] rounded-full duration-200 left-[3px] flex justify-start items-center bg-slate-800 p-[3px]"
              }
            >
              {checked ? <BsSun size={18} /> : <BsFillMoonFill size={18} />}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
