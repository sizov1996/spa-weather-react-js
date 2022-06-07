import './App.css';
import { Input } from './Input';
import React, { useState } from 'react'
import { CardList } from './CardList';


function App() {
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <div className='Wrap'>
        <Input setCitiesList={setCitiesList}/>
        {citiesList.length === 1 && <CardList citiesList={citiesList}/>}
      </div>
    </div>
  );
}

export default App;
