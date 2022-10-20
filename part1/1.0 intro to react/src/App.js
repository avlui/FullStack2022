import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
     <p>
        Hello <b>{props.name}</b>, you are {props.age} years old
      </p>
    </div>
  )
}


function App() {

  const name = 'Peter'
  const age = 10

  return (
    <div className="App">
      <header className="App-header">
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
      <Hello name='Luis' age= '22' />
      <Hello name= 'Pau' age= '21' />
      <Hello name= 'lita' />
      </header>
    </div>
  );
}

export default App;
