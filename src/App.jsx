const App = () => {
  const course = "Industry Elective 1";
  const part1 = "Applications Development and Emerging Technologies";
  const exercises1 = 3;
  const part2 = "Information Management-2";
  const exercises2 = 3;
  const part3 = "Testing and Quality Assurance";
  const exercises3 = 3;
  const fullName = "Zorel Adrean R. Java";
  const courseCode = "CSIT340";
  const section = "G6";

  return (
    <div>
      <h1>
        <Header course={course} />
      </h1>
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total units={exercises1 + exercises2 + exercises3} />
      <Footer name={fullName} code={courseCode} section={section} />
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
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name}: {props.exercises}
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
        {props.name} - {props.code} - {props.section}
      </p>
    </div>
  );
};

export default App;
