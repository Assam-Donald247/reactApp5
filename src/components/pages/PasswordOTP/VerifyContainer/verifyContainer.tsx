import "./verifyContainer.css";
import HeaderBar from "../HeaderBar/HeaderBar";
import VerifyPhone from "../VerifyPhone/VerifyPhone";
import SVT from "../SMS/SVT";
// import TabView from "../TabView/TabView";

function VerifyContainerB() {
  return (
    <div className="VerifyCont">
      <div className="BckImg">
        <HeaderBar />
        <VerifyPhone />
        <SVT />
        {/* <TabView /> */}
      </div>
    </div>
  );
}

export default VerifyContainerB;
