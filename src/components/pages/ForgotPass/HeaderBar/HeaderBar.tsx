import './headerbar.css'
import ArrowLeft from "./ArrowLeft.svg"

function HeaderBar () {
  return (
    <div className="HeaderBar">
      <a href=''><img src={ArrowLeft} alt="Arrow" /></a>
      <h1>Forgot Your Password?</h1>
      <p>Already have an account? <a href="">Log in</a></p>
    </div>
  )
}

export default HeaderBar;