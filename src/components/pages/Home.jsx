import React, { useEffect, useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutContext";
import axios from "axios";
import Details from "../common/Details";
import AddForm from "../common/AddForm";

const Home = () => {
  const URL = "http://localhost:4000/api/workouts/";
  const { workouts, setWorkouts, auxOne, setWorkoutObj } =
    useContext(WorkoutContext);

  //! Fetching all workouts
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setWorkouts(response.data);
        setWorkoutObj({
          title: "",
          reps: "",
          load: "",
          createdAt: "",
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkouts();
  }, [auxOne]);

  return (
    <div className="flex sm:flex-row flex-col w-full h-full justify-around sm:items-start items-center pt-16">
      {/*//! WORKOUTS BODY  */}
      <div className="p-6 flex flex-col gap-5 w-full">
        {workouts &&
          workouts.map((workout) => (
            <Details key={workout._id} workout={workout} />
          ))}
      </div>
      {/*//! NEW WORKOUT FORM  */}
      <div className="p-2 px-6 w-[400px] mb-10">
        <AddForm />
      </div>
    </div>
  );
};

export default Home;
