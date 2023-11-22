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
  <div className="">
    <Header />
    <MainBody />
    <div className="container row">Student Enrolled</div>
    <Student
      experience={2}
      name="Kris Walley"
      headshot="https://api.lorem.space/image/face?w=151&h=151"
    />
    <Student
      experience={5}
      name="Umang Shrestha"
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Student
      experience={7}
      name="John Doe"
      headshot="https://api.lorem.space/image/face?w=154&h=154"
    />
    <Footer />
  </div>
);
