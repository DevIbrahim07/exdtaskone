import "./App.css";
import FlagEight from "./components/FlagEight";
import FlagFive from "./components/FlagFive";
import FlagFour from "./components/FlagFour";
import FlagOne from "./components/FlagOne";
import FlagSeven from "./components/FlagSeven";
import FlagSix from "./components/FlagSix";
import FlagThree from "./components/FlagThree";
import FlagTwo from "./components/FlagTwo";

function App() {
  return (
    <>
      <div>
        <FlagOne />
      </div>
      <br />
      <div>
        <FlagTwo />
      </div>
      <br />
      <div>
        <FlagThree />
      </div>
      <br />
      <div>
        <FlagFour />
      </div>
      <br />
      <div>
        <FlagFive />
      </div>
      <br />
      <div>
        <FlagSix />
      </div>
      <br />
      <div>
        <FlagSeven />
      </div>
      <br />
      <div>
        <FlagEight />
      </div>
    </>
  );
}

export default App;
