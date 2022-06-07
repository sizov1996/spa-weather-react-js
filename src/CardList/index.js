import React, {useEffect} from 'react';
import { Card } from '../Card';
import shortid from 'shortid';
import '../App.css';

export const CardList = ({ citiesList }) => {
    useEffect(() => {
        console.log('mount');
        return () => {
          console.log('unmount');
        }
    }, []);
    console.log('render');
    return (
        <div className='Card__list'>
          {
            citiesList.map(city => <Card key={shortid.generate()} city={city} />)
          }
        </div>
    );
}