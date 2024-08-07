import Bg from "../../image/double.png";
const mainBody = () => {
  return (
    <div>
      <div className="bodytext">
        <h1>Unlock Your Hair{"'"}s Radiance</h1>
        <p>
          Unveil Your Luxurious Aura with Us. Where Elegance Meets Excellence in
          Haircare
        </p>
        <button>Shop Now {">"}</button>
      </div>
      <div className="bodyImg">
        <img src={Bg} alt="" />
      </div>
    </div>
  );
};

export default mainBody;
