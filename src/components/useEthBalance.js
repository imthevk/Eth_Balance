// import React from "react";
import Fortmatic from "fortmatic";
import { ethers } from "ethers";

function useEthBalance() {
  const fm = new Fortmatic("pk_live_F2294B5CFBDBF8CE", "rinkeby");
  const provider = new ethers.providers.Web3Provider(fm.getProvider());
  const signer = provider.getSigner();
  console.log(signer);
}

export default useEthBalance;
