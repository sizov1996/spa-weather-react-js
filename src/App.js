import './App.css';
import { Input } from './Input';
import { Card } from './Card';
import shortid from 'shortid';
import React, { useState } from 'react'


function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <div className='Wrap'>
        <Input setCitiesList={setCitiesList}/>
        <div className='Card__list'>
          {
            citiesList.map(city => <Card key={shortid.generate()} city={city} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
