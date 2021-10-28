import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' >
                    Home
                </Link>
                <Link to='/Armor'>
                    Armor
                </Link>
                <Link to='/Decorations'>
                    Decorations
                </Link>
                <Link to='/Items'>
                    Items
                </Link>
                <Link to='/Locations'>
                    Locations
                </Link>
                <Link to='/Monsters' >
                    Monsters
                </Link>
                <Link to='/Weapons'>
                    Weapons
                </Link>
                <Link to='/HunterToDo'>
                    My Hunter List
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
