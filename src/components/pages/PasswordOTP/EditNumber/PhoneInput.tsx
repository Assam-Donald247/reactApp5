import "./phoneinput.css";

function PhoneNumber() {
  return (
    <div className="telePhone">
      <label>Phone Number</label>
      <input className="telemodal" placeholder="e.g 0910000000" />
      <p>
        Please enter a valid number that can be recieve the OTP required to
        verify your account.
      </p>
    </div>
  );
}

export default PhoneNumber;
