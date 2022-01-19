import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [isGoing, setIsGoing] = useState(true);
  const [exp, setExp] = useState('Select Level');
  const [profile, setProfile] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    alert("A name was submitted!:- " + name + " Profile:- " + profile + " Level:- " + exp);
  }


  return (
    <div className="App">
      <h1>Form Handling</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: &nbsp;
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        &nbsp;&nbsp;
        <select value={exp} onChange={(e) => setExp(e.target.value)}>
          <option value="Select-Level"> Select Level</option>
          <option value="Fresher">Fresher</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        <br />
        <label>
          Is Going:
          <input type="checkbox" name="isGoing"  checked={isGoing} onChange={(e) => setIsGoing(e.target.type ==='checkbox' ? e.target.checked : e.targetvalue)}/>
        </label>
        {
          console.log(isGoing)
        }
        
        <br />

        <label>
          Profile: &nbsp;
          <textarea required type="text" value={profile} onChange={(e) => setProfile(e.target.value)} />
        </label>
        <br />



        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;
