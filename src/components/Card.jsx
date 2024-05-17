import React from "react";

export default function Card({ index, name, profession, image, handleClick, friends}) {

  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-32 bg-sky-200">
         <img className="w-full h-full object-cover" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-xs text-white ${friends == false ? "bg-blue-500" : "bg-green-500"} font-semibold rounded-md mt-3`}>
          {friends == false ? "Add friend" : "Friends"}
        </button>
      </div>
    </div>
  );
}
