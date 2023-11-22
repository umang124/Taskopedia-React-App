import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

function MainBody() {
  const lectureCount = 3;
  return (
    <div>
      <p>In this course, we will learn react js by building Taskopedia!</p>
      <p>Total lecture - {lectureCount}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      <div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Umang" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happing Coding!</p>
  );
}

function Students() {
  const fullName = "Kris Walley";
  const programmingExp = 2;
  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${fullName}`}
            className="w-100"
          />
        </div>
        <div className="col-10">
          {fullName} <br />
          Coding Experience {programmingExp} years
        </div>
      </div>
    </div>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);
