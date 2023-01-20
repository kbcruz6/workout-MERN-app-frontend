import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Update = () => {
  //! VARS
  const [workouts, setWorkouts] = useState({
    title: "",
    reps: "",
    load: "",
    createdAt: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const workoutId = location.pathname.split("/")[2];

  //! Fetching workout to update with the _id
  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const res = await axios.get(
          "https://workout-mern-app-backend.vercel.app/api/workouts/"
        );
        let result = res.data.find((item) => item._id == workoutId);
        console.log(workoutId);
        setWorkouts(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorkout();
  }, []);

  //! Updating content with the inputs
  const handleChange = (e) => {
    setWorkouts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //! Updating current workout
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        "https://workout-mern-app-backend.vercel.app/api/workouts/" + workoutId,
        workouts
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      className="w-full h-full p-10 pt-28 flex justify-center items-center"
    >
      <form
        className="flex flex-col gap-2 p-5 rounded-3xl shadow-md w-[300px] bg-white text-black dark:text-white dark:bg-slate-700 dark:shadow-black duration-300"
        onSubmit={handleUpdate}
      >
        <h3 className="text-2xl text-center font-bold mb-2 p-2 text-green-600 dark:text-orange-400">
          Edit Workout
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
            value={workouts.title}
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
            value={workouts.load}
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
            value={workouts.reps}
          />
        </div>
        {/*//! BUTTON  */}
        <button className="p-2 mt-4 rounded-full duration-300 text-white shadow-md shadow-gray-600 bg-green-600 hover:bg-green-500 dark:bg-slate-800 dark:shadow-black dark:hover:bg-slate-600">
          Update it!
        </button>
      </form>
    </div>
  );
};

export default Update;
