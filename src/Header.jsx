import "./CSS/style.css";

function MainHeader() {
    return <h1 className="heading1">React Course</h1>;
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