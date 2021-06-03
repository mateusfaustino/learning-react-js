import React from 'react'
import './App.css'

function Header(props){
    return(
        <header className="header">
            <h1>{props.brand}</h1>
            <ul className='menu'>
                {props.items.forEach(item => {
                    
                        console.log(item.name)
                    
                })}
                <li className='menu__item'><a href='http://google.com'>About</a></li>
                <li className='menu__item'><a>Contact</a></li>
                <li className='menu__item'><a>Buy</a></li>
            </ul>
        </header>
    )
}

export default Header;  