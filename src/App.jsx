import "./App.css";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.png";
import bg3 from "./assets/bg3.png";
import logo from "./assets/Logo.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <ul className="nav">
            <li className="navItems">01. HISTORY</li>
            <li className="navItems">02. TEAM</li>
          </ul>
        </div>
        <img className="bg" src={bg1} alt="mountains" />
      </div>
      <div className="navbar">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
          <div className="textContainer">
            <p className="logoText">LOSANGELES</p>
            <p className="logoText color2">MOUNTAINS</p>
          </div>
        </div>

        <ul className="nav">
          <li className="navItems color">01. HISTORY</li>
          <li className="navItems color">02. TEAM</li>
        </ul>
      </div>
    </>
  );
}

export default App;
