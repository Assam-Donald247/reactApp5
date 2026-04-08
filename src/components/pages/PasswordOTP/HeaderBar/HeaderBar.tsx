import "./headerbar.css";
import ArrowLeft from "./ArrowLeft.svg";
import { useNavigate } from "react-router-dom";

function HeaderBar() {
  const navigate = useNavigate();

  return (
    <div className="HeaderBar">
      <button className="back" onClick={() => navigate(-1)}>
        <img src={ArrowLeft} />
      </button>
      <h1>Forgot Your Password?</h1>
      <p>
        Already have an account? <a href="">Log in</a>
      </p>
    </div>
  );
}

export default HeaderBar;
