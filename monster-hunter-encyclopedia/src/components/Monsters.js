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

    return (
        <>
        </>
    )
}

export default Monsters;