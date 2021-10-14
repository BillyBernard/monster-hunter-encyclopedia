import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Monsters() {
    const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    axios.get('https://mhw-db.com/monsters')
    .then(resp => {
      setMonsters(resp.data);
      console.log(resp.data);
    }).catch(err => console.log(err))
  }, [])

    const filteredMonsters = monsters.filter(
        monster => monster.name
    );

    return (
        <>
        <div className='monster-container'>
            <div className='monster'>
            </div>
            {filteredMonsters.map(monsters => {
                return (
                    <div key={monsters.id}>
                    <h1>Name: {monsters.name}</h1>
                        <div>
                            <h3>Type and Species: {monsters.type}, {monsters.species}</h3>
                            <p>Description: {monsters.description}</p>
                        </div>
                    </div>
                
                )
            })}
        </div>
        </>
    )
}

export default Monsters;