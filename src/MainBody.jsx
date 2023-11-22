import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

export default function MainBody() {
  const lectureCount = 3;
  return (
    <div style={{ minHeight: "70vh" }}>
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

      <div className="container row">Student Enrolled</div>
      <Student
        experience={2}
        name="Kris Walley"
        headshot="https://api.lorem.space/image/face?w=151&h=151"
      >
        <StudentReview />
      </Student>
      <Student
        experience={5}
        name="Sushi Jane"
        headshot="https://api.lorem.space/image/face?w=150&h=150"
      >
        <StudentReview />
      </Student>
      <Student
        experience={7}
        name="Milly Doe"
        headshot="https://api.lorem.space/image/face?w=154&h=154"
      />
    </div>
  );
}
