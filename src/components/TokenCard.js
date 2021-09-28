import React, { useState } from "react";
import { fetchTokenBalance } from "./useEthBalance";

function TokenCard() {
  const [walletInput, setWalletInput] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [tokenBal, setTokenBal] = useState("");

  const showTokenBalPressed = async () => {
    setIsLoading(true);
    let tokenBalance = await fetchTokenBalance(walletInput, tokenInput);

    setTokenBal(tokenBalance);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-screen h-screen">
      <div className="flex flex-col bg-white rounded shadow-lg p-20 mt-12">
        <h2 className="text-center font-bold mb-5">Ether Balance</h2>
        <label className="font-semibold text-sm mb-2" htmlFor="ethField">
          Wallet Address or ETH Name
        </label>
        <input
          className="flex items-center h-10 px-4 w-80 rounded bg-white border-2 border-light-blue-500 border-opacity-50"
          type="text"
          placeholder="Wallet Address"
          onChange={(e) => setWalletInput(e.target.value)}
          value={walletInput}
        />

        <label className="font-semibold text-sm mt-8 mb-2" htmlFor="ethField">
          Token Address
        </label>
        <input
          className="flex items-center h-10 px-4 w-80 rounded bg-white border-2 border-light-blue-500 border-opacity-50"
          type="text"
          placeholder="Enter Token Address"
          onChange={(e) => setTokenInput(e.target.value)}
          value={tokenInput}
        />
        <button
          onClick={showTokenBalPressed}
          className="flex items-center justify-center h-12 px-6 w-56 bg-purple-500 mt-8 m-auto mb-4 rounded font-semibold text-md text-white hover:bg-purple-700"
        >
          Show Token Balance
        </button>

        {isLoading ? (
          <svg
            className="flex mt-4 justify-center m-auto"
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="80px"
            height="80px"
            viewBox="0 0 40 40"
            enableBackground="new 0 0 40 40"
            xmlSpace="preserve"
          >
            <path
              opacity="0.2"
              fill="#000"
              d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
            />
            <path
              fill="#000"
              d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 20 20"
                to="360 20 20"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        ) : (
          <h6 className="font-bold mt-4">
            {tokenBal !== "" && tokenBal !== undefined
              ? `Your balance is : ${tokenBal}`
              : ""}
          </h6>
        )}
      </div>
    </div>
  );
}
export default TokenCard;
