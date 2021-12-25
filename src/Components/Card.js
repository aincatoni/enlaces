import React from "react";

function Card({ ImageCard, EnlaceCard, TituloCard }) {
  return (
    <div className="dark:bg-zinc-700 dark:text-gray-400 pr-2 w-full transition-all mx-auto bg-white rounded-xl shadow-md hover:shadow-lg flex items-center space-x-5 md:space-x-11 my-5 md:my-0">
      <div className="w-20 md:w-36">
        <img className="rounded-l-lg object-fit" src={ImageCard} alt="" />
      </div>
      <div className="w-full md:w-60">
        <a href={EnlaceCard}>
          <h4>{TituloCard}</h4>
        </a>
      </div>
    </div>
  );
}

export default Card;
