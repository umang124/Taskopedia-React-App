import "./CSS/style.css";
import logo from "./images/react.png";

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">React Course - Taskopedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This is an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

export default Header;
