import LoadingRing from "./Ring.png";
import "./LoadingComponent.css";
import logo from '../images/transparent-matt-dizzle-logo-green-and-blue.png'

const LoadingComponents = () => {
  return (
    <div className='loading-component-box'>
      <img
        src={LoadingRing}
        alt="loading-ring"
        className="ring"
      />

<img
        src={logo}
        alt="matt-dizzle-dev-logo"
        className="logo animate__animated animate__rotateIn"
      />
    </div>
  );
};

export default LoadingComponents
