import React from 'react';
import './card.styles.css'

// https://robohash.org/${}?set=set2

export const Card = ({ monster }) => (
  <div className='card-container'>
    <img src={`https://robohash.org/${monster.id}?set=set2`} alt='monster'></img>
    <h2>{monster.name}</h2>
    <h5>{monster.email}</h5>
  </div>
)