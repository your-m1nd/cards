import React, {useState} from 'react';
import Card from '../../comps/Card/Card';
import Data from '../../comps/Data/Data.json';

const data = JSON.stringify(Data);
const data1 = JSON.parse(data);

console.log(data1)

function Cards() {
    const [selectedId, setSelectedId] = useState(null);
    const [isSelected, setSelected] = useState(null);

    const onClick = (id) => {
        setSelectedId(id);
        setSelected(id);
      }
    
          return (
          <div>
            {
                data1.map((data1) => <Card key={data1.id} id={data1.id} english={data1.english} transcription={data1.transcription} translation={data1.russian} tags={data1.tags} onClick={onClick} selectedId={selectedId} isSelected={isSelected}/>
                ) }
            </div>
            )
    }
    
    export default Cards;