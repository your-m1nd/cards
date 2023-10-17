import React from 'react';
import logo from './education.jpg';
import '../views/Head.scss';

const Head = (props) => {

    const {action} = props;


    return (
        <React.Fragment>
        <header className='header'>
            <h1 className='header__title'>English Flashcards</h1>
            <img className='header__logo' src={logo} alt="logo" />
            <p>{"Let's start our journey!"}</p>
            <div className='menu'>
            <button className={'menu__button'} onClick={() => action('learning')} >Learning</button>
            <button className={'menu__button'} onClick={() => action('training')}>Training</button>
            </div>
        </header>
        </React.Fragment>
    )
}

export default Head;