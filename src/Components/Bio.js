import React from "react";

function Bio({ ImageCard, TituloCard, BajadaCard }) {
  return (
    <div
      className="dark:bg-zinc-700 dark:text-gray-400 p-4 w-full transition-all 
    mx-auto bg-white shadow-md flex items-center space-x-11 mb-5"
    >
      <div className="w-36">
        <img className="rounded-full" src={ImageCard} alt="" />
      </div>

      <div className="w-full">
        <h2 className="dark:text-gray-500 text-gray-800 font-bold">
          {TituloCard}
        </h2>
        <h6 className="text-gray-400">{BajadaCard}</h6>
      </div>
    </div>
  );
}

export default Bio;
