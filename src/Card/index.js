import React from 'react'
import '../App.css';


export const Card = ({city}) => {
    return (
        <div className='Card'>
            <div className='Card__info'>
                <img className='Card__info--icon' src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon" />
                <h3 className='Card__info--title'>{city}</h3>
                <p className='Card__info--description'>Weather</p>
                <p className='Card__info--temp'>Temperature</p>
            </div>
            <div className='Subinfo'>
                <p className=''>Humidity: 15</p>
                <p className=''>Feels like: 15</p>
            </div>
        </div>
    );
}