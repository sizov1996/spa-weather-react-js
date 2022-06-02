import './App.css';
import { Input } from './Input';
import { Card } from './Card';
import shortid from 'shortid';

function App() {
  const citiesList = ['Moscow', 'Dubai', 'San Diego', 'Ulyanovsk']
  return (
    <div className="Main">
      <div className='Wrap'>
        <Input />
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
