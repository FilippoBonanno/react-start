import React from 'react'
import './Navbar.css'
import Link from './Link'


function Navbar() {
    const x = 0;
    return (
        <ul>
            <li><Link>Props del componente link</Link></li>
            <li><a href="#">Ciao</a></li>
            <li><a href="#">Ciao</a></li>
            <li className={`${x > 1 ? "text-red-500" : "text-green-500"}`}>Colore <a href="#">Ciao</a></li>
        </ul>
    )
}

export default Navbar