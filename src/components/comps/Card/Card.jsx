import React, { useState } from 'react';
import './Card.scss';
import Button from '../Button/Button';

function Card(props) { 
const {id, english, transcription, russian, tags} = props;
const [selectedId, setSelectedId] = useState(null);
const [isSelected, setSelected] = useState(null);
const onClick = (id) => {
  setSelectedId(id);
  setSelected(id);
}

return (
<section>


  <div className={selectedId === id ?'card ' + (isSelected ? 'selected' :'card') : 'card'} key={id} onClick={()=>{onClick(id)}} >
    <h2 className='card__title'>{english}</h2>
    <p className='card__transcription'>{transcription}</p>
    <p className='card__tags'>{tags}</p>
    <Button className={'card__button' ? 'open' : 'card__button'} name={'Показать перевод'}/>
    {selectedId === id ? <p className='card__translation'>{russian}</p> : <p className='card__translation'></p>} 
  </div>

  </section>
  
)
}

export default Card;