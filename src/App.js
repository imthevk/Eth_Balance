import "./App.css";
import Card from "./components/Card";
// import Web3 from "web3";
import useEthBalance from "./components/useEthBalance";
function App() {
  useEthBalance();
  return (
    // <div className="p-6 flex justify-center">
    //   <h1 class="text-blue-400">Hi all</h1>
    // </div>
    <Card />
  );
}

export default App;
