//Print the name of the course.
function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
      <hr></hr>
    </>
  )
}

//Print the name of the course part an its number of execercices
function Part(props) {
  return (
    <p>
      <b>{props.name}</b>: {props.exercises}
    </p>
  )
}

//Print the list of the course's parts.
function Content(props) {
  const objects = props.parts;

  return (
    <>
      {
        objects.map(obj=> (
          <Part name={obj.name} exercises={obj.exercises} />
        ))
      }
    </>
  )
}

//Print the total course's exercices.
function Total(props) {
  let total = 0;
  props.parts.forEach(object => total += object.exercises);

  return <p><i>Number of exercises {total}</i></p>
}

//Main function.
function App() {
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;