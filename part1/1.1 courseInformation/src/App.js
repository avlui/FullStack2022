function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}
function Part(props) {
  return (
    <p>
      {props.name} {props.number}
    </p>
  )
}
function Content(props) {
  return (
    <>
      <Part name={props.parts[0]} number={props.exercises[0]} />
      <Part name={props.parts[1]} number={props.exercises[1]} />
      <Part name={props.parts[2]} number={props.exercises[2]} />
    </>
  )
}
function Total(props) {
  function sumar_array(array_numeros) {
    let suma = 0;
    array_numeros.forEach((numero) => suma += numero);
    return suma;
  }

  return (
    <p>Number of exercises {sumar_array(props.exercises)}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App;
