import React from 'react';
import logo from './education.jpg';
import '../views/Head.scss';

function Head() {


    return (
        <React.Fragment>
        <header className='header'>
            <h1 className='header__title'>English Flashcards</h1>
            <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item'>Learning</li>
                <li className='menu__item'>Training</li>
                </ul>
            </nav>
            <img className='header__logo' src={logo} alt="logo" />
            <p>{"Let's start our journey!"}</p>
        </header>
        </React.Fragment>
    )
}

export default Head;