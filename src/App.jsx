const App = () => {
  const course = "Industry Elective 1";

  const parts = [
    {
      name: "Applications Development and Emerging Technologies",
      units: 3,
    },
    {
      name: "Information Management-2",
      units: 3,
    },
    {
      name: "Testing and Quality Assurance",
      units: 3,
    },
  ];

  const student = [
    {
      name: "Zorel Adrean R. Java",
      courseCode: "CSIT340",
      section: "G6"
    }
  ];

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content subjectParts={parts} />
      <Total unitParts={parts} />
      <Footer studentInfo={student} />
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
      <Part part={props.subjectParts[0]} />
      <Part part={props.subjectParts[1]} />
      <Part part={props.subjectParts[2]} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name}: {props.part.units}
      </p>
    </div>
  );
};

const Total = (props) => {
  const totalUnits =
    props.unitParts[0].units + props.unitParts[1].units + props.unitParts[2].units;
  return (
    <div>
      <p>Number of units: {totalUnits}</p>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      <p>
        {props.studentInfo[0].name} - {props.studentInfo[0].courseCode} - {props.studentInfo[0].section}
      </p>
    </div>
  );
};

export default App;
