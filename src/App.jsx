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
      <div className="navbar2">
        <img src={logo} alt="logo" className="logo" />
        <p className="logoText">LOSANGELES</p>
        <p className="logoText">MOUNTAINS</p>
        <ul className="nav">
          <li className="navItems">01. HISTORY</li>
          <li className="navItems">02. TEAM</li>
        </ul>
      </div>
    </>
  );
}

export default App;
