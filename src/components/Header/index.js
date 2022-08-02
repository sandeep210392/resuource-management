import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <img
      className="logo-img"
      alt="logo"
      src="https://res.cloudinary.com/sandeep321/image/upload/v1659250966/NxtWave_TM_Coloured_logo_1_i3m7cw.jpg"
    />
    <Link to="/addresource" className="addbtn">
      + Add
    </Link>
    <img
      className="person-img"
      alt="person"
      src="https://res.cloudinary.com/sandeep321/image/upload/v1659251259/S_sxkmzz.jpg"
    />
  </div>
);

export default Header;
