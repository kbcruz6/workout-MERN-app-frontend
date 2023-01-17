import React, { useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutContext";
import { Link } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { BsTrash } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

const Details = ({ workout }) => {
  const { handleDelete } = useContext(WorkoutContext);

  return (
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
      <div className="w-full flex flex-row justify-between p-4 pl-6 rounded-3xl shadow-lg shadow-slate-500 bg-white dark:shadow-black dark:bg-slate-700 dark:text-white duration-300">
        <div
          key={workout._id}
          className="flex flex-col text-xl justify-center gap-1"
        >
          {/*//! TITLE  */}
          <p className="font-bold text-2xl text-green-600 dark:text-orange-400 duration-300">
            {workout.title}
          </p>
          {/*//! LOAD - REPS - TIME  */}
          {workout.load === 0 ? (
            ""
          ) : (
            <p className="duration-300">
              <span className="font-bold ">Load:</span> {workout.load} kg
            </p>
          )}
          <p className="duration-300">
            <span className="font-bold ">Reps:</span> {workout.reps}
          </p>
          <p className="text-sm duration-300">
            {formatDistanceToNow(new Date(workout.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
        {/*//! BUTTONS  */}
        <div className="flex flex-row justify-start items-start">
          <button className="hover:bg-gray-300 dark:hover:bg-slate-600 rounded-full p-2 duration-300 ">
            <Link to={`/update/${workout._id}`}>
              <BiPencil size={20} />
            </Link>
          </button>
          <button
            onClick={() => handleDelete(workout._id)}
            className="hover:bg-gray-300 dark:hover:bg-slate-600 rounded-full p-2 duration-300 "
          >
            <BsTrash size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
