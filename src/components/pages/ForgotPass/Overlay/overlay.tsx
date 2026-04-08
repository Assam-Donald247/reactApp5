import "./overlay.css";
import VerifyContainerA from "../VerifyContainer/verifyContainerA";
import Logo from './../../../img/Logo.svg'

function OverlayA() {
  return (
    <>
      <div className="headbar">
        <img className="logo" src={Logo} />
      </div>
      <div className="Overlay">
        <VerifyContainerA />
      </div>
    </>
  );
}

export default OverlayA;
