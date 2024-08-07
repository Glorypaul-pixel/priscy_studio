import Logo from "../../image/Brand_Logo.png";
const header = () => {
  return (
    <div className="bg-black">
      <header>
        <img src={Logo} alt="brand logo" />
      </header>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="shopnow">
        <h5>Shop Now {">"}</h5>
      </div>
    </div>
  );
};

export default header;
