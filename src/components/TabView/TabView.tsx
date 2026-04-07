import PhoneNumber from "../TabContent/WithNum/PhoneInput";
import UserName from "../TabContent/WithUser/UserName";
import "./tabview.css";
import { useState } from "react";

function SVT() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };

  return (
    <div className="SVT">
      <p>How would you like to recover your password?</p>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "active-tab" : "tab"}
          onClick={() => toggleTab(1)}
        >
          With Phone
        </button>
        <button
          className={toggleState === 2 ? "active-tab" : "tab"}
          onClick={() => toggleTab(2)}
        >
          With Username
        </button>
      </div>
      <div className="tab-content">
        <div className={toggleState === 1 ? "active-content" : "content"}>
          <p className="phonetext">To recover your password, please input your phone number below</p>
          <PhoneNumber />
          <div className="log-section">
            <button className="LogsButton">Continue</button>
          </div>
        </div>
        <div className={toggleState === 2 ? "active-content" : "content"}>
          <p className="mailtext">To recover your password, please input your phone number below</p>
          <UserName />
          <div className="log-section">
            <button className="LogsButton">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SVT;
