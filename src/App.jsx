const App = () => {
  const course = "Industry Elective 1";

  const part1 = {
    name: "Applications Development and Emerging Technologies",
    exercises: 3
  }

  const part2 = {
    name: "Information Management-2",
    exercises: 3
  }

  const part3 = {
    name: "Testing and Quality Assurance",
    exercises: 3
  }

  const student = {
    name: "Zorel Adrean R. Java",
    courseCode: "CSIT340",
    section: "G6"
  };

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total units={part1.exercises + part2.exercises + part3.exercises} />
      <Footer student={student} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name}: {props.part.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Number of units: {props.units}</p>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <p>
        {props.student.name} - {props.student.courseCode} - {props.student.section}
      </p>
    </div>
  );
};

export default App;
