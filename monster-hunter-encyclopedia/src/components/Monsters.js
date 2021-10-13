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
                    <h1>{monsters.name}</h1>
                )
            })}
        </div>
        </>
    )
}

export default Monsters;