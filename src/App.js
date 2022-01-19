import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [value, setValue] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted!:- " + value);
  }


  return (
    <div className="App">
      <h1>Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: &nbsp;
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
