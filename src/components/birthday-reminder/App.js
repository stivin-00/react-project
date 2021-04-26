import React, { useState } from 'react';
import data from './data';
import List from './List';
import './index.css';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main className="zz">
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;