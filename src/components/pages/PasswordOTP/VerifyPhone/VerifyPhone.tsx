import { useState } from "react";
import "./verifyphone.css";
import EditModal from "../EditNumber/EditModal";
import PhoneNumber from "./../EditNumber/PhoneInput";

function VerifyPhone() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="VerifyPhoneCont">
      <div className="VerifyPhone">
        <h1>Verify Phone Number</h1>
        <p>
          Please select your preferred method for verifying{" "}
          <span>+234 809 6253 715</span> as your primary number
        </p>
        <div className="edit">
          <button
            onClick={() => {
              setOpen(true);
            }}
          >
            Edit Number
          </button>
          <EditModal open={open} onClose={() => setOpen(false)}>
            <div className="modalBack">
              <div className="modalHeader">
                <h1>Edit Phone Number</h1>
              </div>
              <div className="modalBody">
                <PhoneNumber />
              </div>
              <div className="modalFooter">
                <button className="Save">Save and Continue</button>
                <button className="Cancel" onClick={() => {setOpen(false)}}>Cancel</button>
              </div>
            </div>
          </EditModal>
        </div>
      </div>
    </div>
  );
}

export default VerifyPhone;
