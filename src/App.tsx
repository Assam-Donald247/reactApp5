import "./App.css";
// import OverlayA from "./components/pages/ForgotPass/Overlay/overlay";
import Logo from "./components/img/Logo.svg";
import OverlayB from "./components/pages/PasswordOTP/Overlay/overlay";


function App() {
  return (
    <>
      <div className="headbar">
        <img className="logo" src={Logo} />
      </div>
      <div>
        {/* <OverlayA /> */}
        <OverlayB />
      </div>
    </>
  );
}

export default App;
