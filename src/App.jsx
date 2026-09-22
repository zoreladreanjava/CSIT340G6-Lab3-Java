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
      <Content subject={part1} units={exercises1} />
      <Content subject={part2} units={exercises2} />
      <Content subject={part3} units={exercises3} />
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
      <p>
        {props.subject}: {props.units}
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
