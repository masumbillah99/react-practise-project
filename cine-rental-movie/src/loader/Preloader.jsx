import gearIcon from "../assets/gear.svg";

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={gearIcon} />
      <span>Loading...</span>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
