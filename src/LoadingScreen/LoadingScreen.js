import LoadingRing from "./Ring.png";
import Logo from "../images/matt-dizzle-dev-logo.png";
import "./LoadingScreen.css";


const LoadingScreen = () => {
  return (
    <div className='loading-box'>
      <span className='animate__animated animate__flash animate__infinite animate__slow'>Loading</span>
      <img
        src={LoadingRing}
        alt="loading-ring"
        className="ring  animate__animated animate__zoomIn "
      />
{/* 
<img
        src={Logo}
        alt="matt-dizzle-dev-logo"
        className="logo"
      /> */}
    </div>
  );
};

export default LoadingScreen
