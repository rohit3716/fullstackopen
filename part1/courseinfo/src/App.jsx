

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}
const Header = (props) => {
  return <h1>{props.course.name}</h1>;
}
const Content = (props) => {
  const {parts} = props;
  return(
    <>
      {
        parts.map((data, index) => <Part part={data.name} exercises={data.exercises} key={index}/>)
      }
    </>
  )
}

const Total = (props) => {
  const {parts} = props;
  let total = 0;
  parts.forEach(element => {
    total += element.exercises;
  });

  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App