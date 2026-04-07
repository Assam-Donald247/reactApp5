import "./App.css";
import Overlay from "./components/Overlay/overlay";
import Logo from "./components/img/Logo.svg";

function App() {
  return (
    <>
      <div className="headbar">
        <img className="logo" src={Logo} />
      </div>
      <div>
        <Overlay />
      </div>
    </>
  );
}

export default App;
