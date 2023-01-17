import React, { useState, useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutContext";
import axios from "axios";

const AddForm = () => {
  const { setAuxOne, auxOne, workoutObj, handleChange } =
    useContext(WorkoutContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/workouts/", workoutObj);
    } catch (error) {
      console.log(error);
    }
    setAuxOne(!auxOne);
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="100"
      className="w-full p-4 "
    >
      <form
        className="flex flex-col gap-2 p-5 rounded-3xl shadow-lg shadow-slate-500 bg-white dark:bg-slate-700 dark:text-slate-200 dark:shadow-black duration-300"
        onSubmit={handleSubmit}
      >
        <h3 className="text-2xl text-center font-bold mb-2 p-2 text-green-600 dark:text-orange-400 duration-300">
          New Workout
        </h3>
        {/*//! TITLE  */}
        <div className="flex flex-col">
          <label className="font-bold">Excercise title:</label>
          <input
            required
            name="title"
            type="text"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500 dark:bg-slate-700 dark:shadow-black dark:hover:bg-slate-600"
            value={workoutObj.title}
          />
        </div>
        {/*//! LOAD  */}
        <div className="flex flex-col">
          <label className="font-bold">Load (kg):</label>
          <input
            required
            name="load"
            type="number"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500 dark:bg-slate-700 dark:shadow-black dark:hover:bg-slate-600"
            value={workoutObj.load}
          />
        </div>
        {/*//! REPS  */}
        <div className="flex flex-col">
          <label className="font-bold">Reps:</label>
          <input
            required
            name="reps"
            type="number"
            onChange={handleChange}
            className="px-3 py-1 shadow-md rounded-3xl focus:outline-none duration-300 bg-gray-200 hover:bg-gray-300 shadow-slate-500 dark:bg-slate-700 dark:shadow-black dark:hover:bg-slate-600"
            value={workoutObj.reps}
          />
        </div>
        {/*//! BUTTON  */}
        <button className="p-2 mt-4 rounded-full duration-300 text-white shadow-md shadow-gray-600 bg-green-600 hover:bg-green-500 dark:bg-slate-800 dark:shadow-black dark:hover:bg-slate-600">
          Add it!
        </button>
      </form>
    </div>
  );
};

export default AddForm;
