import ReactDOM from "react-dom/client";
import Header from "./Header";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
      {/* <div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Umang" />
      </div> */}
    </div>
  );
}

function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happing Coding!</p>
  );
}


root.render(
  <div className="container">
    <Header />
    <MainBody />
    <div className="row">Student Enrolled</div>
    <Student experience={2} name="Kris Walley" />
    <Student experience={5} name="Umang Shrestha" />
    <Student experience={7} name="John Doe" />
    <Footer />
  </div>
);
