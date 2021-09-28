var Web3 = require("web3");

//link used from alchemy api
const url =
  "https://eth-mainnet.alchemyapi.io/v2/r9vdxOHpNvlgAsB1RhHWtW03Aqyw974L";

const web3 = new Web3(url);

// test token = "0xf8C3527CC04340b208C854E985240c02F7B7793f";

// Test Address - 0x73EAC38D3d5C31d1340494197d7E90CF80116F08

//in this function we will pass 2 input fields to get token balance
export async function fetchTokenBalance(fromAddress, tokenAddress) {
  let walletAddress = await getHexAddress(fromAddress);
  const minABI = [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      type: "function",
    },
  ];

  try {
    const contract = new web3.eth.Contract(minABI, tokenAddress);
    const result = await contract.methods.balanceOf(walletAddress).call();

    return web3.utils.fromWei(result);
  } catch (e) {
    alert("Please enter a valid address");
  }
}

async function ethBalanceFromHex(hexAddress) {
  try {
    let weiBal = await web3.eth.getBalance(hexAddress);
    return web3.utils.fromWei(weiBal, "ether").toString();
  } catch (e) {
    alert("Please enter a valid address");
  }
}

//this function returns hexaddress
async function getHexAddress(domain) {
  if (domain.endsWith(".eth")) {
    let hexAddress = await web3.eth.ens.getAddress(domain);
    return hexAddress;
  } else {
    return domain;
  }
}

export default async function fetchBalance(address) {
  try {
    let hexAddress = await getHexAddress(address);
    return await ethBalanceFromHex(hexAddress);
  } catch (e) {
    console.log(e);
  }
}
