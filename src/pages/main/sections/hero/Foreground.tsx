import "./style.css";
import Arrow from "../../../../assets/icons/arrow-double-side.svg";

function Foreground() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-auto">
      <div className="mouse-space border-white flex justify-center items-center absolute left-1/2 bottom-14">
        <img className="invert scale-x-75 h-3/4" src={Arrow} alt="" />
      </div>
    </div>
  );
}

export default Foreground;
