import "./App.css";
// import OverlayA from "./components/pages/ForgotPass/Overlay/overlay";
import { Routes, Route } from "react-router-dom";
import OverlayA from "./components/pages/ForgotPass/Overlay/overlay";
import OverlayB from "./components/pages/PasswordOTP/Overlay/overlay";
// import Logo from "./components/img/Logo.svg";
// import OverlayB from "./components/pages/PasswordOTP/Overlay/overlay";

function App() {
  return (
    <Routes>
      <Route path='/' element = { <OverlayA /> }/>
      <Route path ='OTP' element = {<OverlayB/>}></Route>
    </Routes>
  );
}

export default App;
