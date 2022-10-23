function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
      <hr></hr>
    </>
  )
}
function Part(props) {
  return (
    <p>
      <b>{props.name}</b>: {props.exercises}
    </p>
  )
}
function Content(props) {
  const objects = props.parts;
  return (
    <>
      <Part name={objects[0].name} exercises={objects[0].exercises} />
      <Part name={objects[1].name} exercises={objects[1].exercises} />
      <Part name={objects[2].name} exercises={objects[2].exercises} />
    </>
  )
}
function Total(props) {
  let total = 0;
  props.parts.forEach(object => total += object.exercises);
  
  return <p><i>Number of exercises {total}</i></p>
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App;