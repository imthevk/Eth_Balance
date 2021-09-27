import React, { useState } from "react";
import fetchBalance from "./useEthBalance";

function Card() {
  const [field, setField] = useState("");
  const [balance, setBalance] = useState("");

  const onShowBalancePressed = async () => {
    let eth = await fetchBalance(field);
    setBalance(eth);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-screen h-screen">
      <div className="flex flex-col bg-white rounded shadow-lg p-20 mt-12">
        <h2 className="text-center font-bold mb-5">Ether Balance</h2>
        <label className="font-semibold text-xs mb-2" htmlFor="ethField">
          Wallet Address or ETH Name
        </label>
        <input
          className="flex items-center h-10 px-4 w-80 rounded bg-white border-2 border-light-blue-500 border-opacity-50"
          type="text"
          placeholder="Wallet Address"
          onChange={(e) => setField(e.target.value)}
          value={field}
        />

        <button
          onClick={onShowBalancePressed}
          className="flex items-center justify-center h-12 px-6 w-56 bg-purple-500 mt-8 m-auto mb-4 rounded font-semibold text-md text-white hover:bg-purple-700"
        >
          Show address balance
        </button>
        {field === "" ? (
          <svg
            className="flex mt-4 justify-center m-auto"
            width="51px"
            height="50px"
            viewBox="0 0 51 50"
          >
            <rect y="0" width="13" height="50" fill="#1fa2ff">
              <animate
                attributeName="height"
                values="50;10;50"
                begin="0s"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="0;20;0"
                begin="0s"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>

            <rect x="19" y="0" width="13" height="50" fill="#12d8fa">
              <animate
                attributeName="height"
                values="50;10;50"
                begin="0.2s"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="0;20;0"
                begin="0.2s"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>

            <rect x="38" y="0" width="13" height="50" fill="#06ffcb">
              <animate
                attributeName="height"
                values="50;10;50"
                begin="0.4s"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="0;20;0"
                begin="0.4s"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        ) : (
          <h6 className="font-bold">Your balance: ${balance} ETH</h6>
        )}
      </div>
    </div>
  );
}

export default Card;
