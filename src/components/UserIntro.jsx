import React from "react";
import { useSelector } from "react-redux";

const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const todayDate = date.toLocaleDateString("en-US", options);
const hours = new Date().getHours();
function timeContext(hours) {
  if (hours < 12) return "Morning";
  else if (hours < 17) return "Afternoon";
  else return "Evening";
}

const UserIntro = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div>
      <p className="text-gray-300 text-sm tracking-wider font-bold">
        Good {timeContext(hours)},
      </p>
      <div className=" text-gray-400 font-light min-w-max text-xs tracking-wider">
        {todayDate}
      </div>
      <div className="text-gray-600 font-bold min-w-max flex justify-start items-center pt-2 mt-4 border-t-[1px] border-blureffect gap-2">
        <div className="bg-blue-700 text-gray-300 text-xl font-semibold w-8 h-8 rounded-full flex justify-center items-center">
          {user.username.charAt(0)}
        </div>
        <p className="text-gray-200 font-bold">{user.username}</p>
      </div>
    </div>
  );
};

export default UserIntro;
