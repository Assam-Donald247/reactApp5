import "./overlay.css";
import VerifyContainerB from "../VerifyContainer/verifyContainer";
import Logo from './../../../img/Logo.svg'

function OverlayB() {
  return (
    <>
      <div className="headbar">
        <img className="logo" src={Logo} />
      </div>
      <div className="Overlay">
        <VerifyContainerB />
      </div>
    </>
  );
}

export default OverlayB;
