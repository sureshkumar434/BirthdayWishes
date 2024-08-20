import logo from './logo.svg';
import './App.css';
import List from './List';
import { useState } from 'react';
import data from './data';

function App() {
  const [people,setPeople] = useState(data);
  const clearBirthday = () => {
    setPeople([]);
  }
  return (
    <main>
      <section className='container'>
          {people.length < 1 && <h3>0 Birthdays today</h3>}
          <List people={people}/>
          <button onClick={clearBirthday}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
