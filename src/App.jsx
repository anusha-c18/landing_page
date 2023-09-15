import "./App.css";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import logo from "./assets/Logo.png";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav">
          <li className="navItems">
            <a href="#history">01. HISTORY</a>
          </li>
          <li className="navItems">02. TEAM</li>
        </ul>
      </div>
      <img className="bg" src={bg1} alt="mountains" />
      <div className="navbar2">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
          <div className="textContainer">
            <p className="logoText">LOSANGELES</p>
            <p className="logoText color2">MOUNTAINS</p>
          </div>
        </div>

        <ul className="nav">
          <li className="navItems color">
            <a href="#history">01. HISTORY</a>
          </li>
          <li className="navItems color">02. TEAM</li>
        </ul>
      </div>
      <div className="container" id="history">
        <img className="bg" src={bg2} alt="mountains" />
        <div className="description">
          <p className="slno">01.</p>
          <p className="title">HISTORY</p>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, libero, asperiores cupiditate laudantium quasi minima
            quaerat, ex magni expedita nam optio. Veniam, hic fugit. Officia
            doloribus id aliquam error et.
          </p>
        </div>
        <div className="description2">
          <Carousel />
        </div>
      </div>
      <div className="description3">
        <p className="slno sm2">02.</p>
        <p className="title tm2">CLIMB</p>
        <p className="content cm2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          libero, asperiores cupiditate laudantium quasi minima quaerat, ex
          magni expedita nam optio. Veniam, hic fugit. Officia doloribus id
          aliquam error et.
        </p>
      </div>
    </>
  );
}

export default App;
