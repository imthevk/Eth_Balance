// import React from "react";
var Web3 = require("web3");

const url =
  "https://eth-mainnet.alchemyapi.io/v2/r9vdxOHpNvlgAsB1RhHWtW03Aqyw974L";

const web3 = new Web3(url);

// Test Address - 0x73EAC38D3d5C31d1340494197d7E90CF80116F08

async function ethBalanceFromHex(hexAddress) {
  try {
    let weiBal = await web3.eth.getBalance(hexAddress);
    return web3.utils.fromWei(weiBal, "ether").toString();
  } catch (e) {
    alert("Please enter a valid address");
  }
}

export default async function fetchBalance(address) {
  try {
    if (address.endsWith(".eth")) {
      let hexAddress = await web3.eth.ens.getAddress(address);
      return await ethBalanceFromHex(hexAddress);
    } else {
      return await ethBalanceFromHex(address);
    }
  } catch (e) {
    console.log(e);
  }
}
