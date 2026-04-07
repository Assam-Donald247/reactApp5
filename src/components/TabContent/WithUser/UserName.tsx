

function UserName() {
  return (
    <div className="withUser">
      <div className="form">
        <label>E-mail Address</label>
        <input
          type="email"
          className="User"
          placeholder="Enter a valid e-mail address"
        />
        <span>Please enter the Email Address linked to your 247Bet Account</span>
      </div>
    </div>
  );
}

export default UserName;
