import Eye from "./../../img/Eye.svg"

function PassWord() {
  return (
    <div>
      <label>Password</label>
      <input
        type="password"
        className="password"
        placeholder="••••••••"
      /> <button className="eye"><img src={Eye} /></button>
    </div>
  );
}

export default PassWord;
