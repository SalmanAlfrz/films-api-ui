import React from "react";

const Card = () => {
  return (
    <div
      className="card bg-gas-money-black w-80 bg-cover bg-no-repeat bg-center shadow-xl my-10 overflow-hidden"
      style={{
        backgroundImage: "url(/film.png)",
        backgroundBlendMode: "luminosity",
      }}
    >
      <div className="h-80"></div>
      <figure>
        <img src="film.png" alt="film" className="w-52 absolute mb-64" />
      </figure>
      <div className="card-body glass rounded-bl-sm rounded-tl-none rounded-tr-full text-wen-minty">
        <h2 className="card-title text-3xl">Life hack</h2>
        <p>2022-10-11</p>
        <p className="text-xl font-bold">7.4</p>
      </div>
    </div>
  );
};

export default Card;
