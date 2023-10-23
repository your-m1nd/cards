import React from 'react';
import logo from './education.jpg';
import '../views/Head.scss';
import { Link } from 'react-router-dom';

function Head() {


    return (
        <React.Fragment>
        <header className='header'>
            <h1 className='header__title'>English Flashcards</h1>
            <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'><Link to="/learning">Learning</Link></li>
                <li className='menu__item'><Link to="/training">Training</Link></li>
                </ul>
            </nav>
            <img className='header__logo' src={logo} alt="logo" />
            <p>{"Let's start our journey!"}</p>
        </header>
        </React.Fragment>
    )
}

export default Head;