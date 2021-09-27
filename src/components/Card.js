import React from "react";

function Card() {
  return (
    <div className="flex flex-col items-center justify-center bg-white w-screen h-screen">
      <form className="flex flex-col bg-white rounded shadow-lg p-20 mt-12">
        <h2 className="text-center font-bold mb-5">Ether Balance</h2>
        <label className="font-semibold text-xs mb-2" for="ethField">
          Wallet Address or ETH Name
        </label>
        <input
          className="flex items-center h-10 px-4 w-80 rounded bg-white border-2 border-light-blue-500 border-opacity-50"
          type="text"
          placeholder="Wallet Address"
        />
        <button className="flex items-center justify-center h-12 px-6 w-56 bg-purple-500 mt-8 m-auto rounded font-semibold text-md text-white hover:bg-purple-700">
          Show address balance
        </button>
      </form>
    </div>
  );
}

export default Card;
