import React, {useState} from 'react';
import './DataList.scss';
import Data from '../../comps/Data/Data.json';

const data = JSON.stringify(Data);
const data1 = JSON.parse(data);

function Table() {

    const [isEdit, setIsEdit] = useState(false);
    const [isSave, setIsSave] = useState(false);


    const [InputEnglish, setInputEnglish] = useState('');
    const [InputTranscription, setInputTranscription] = useState('');
    const [InputRussian, setInputRussian] = useState('');
    const [InputTags, setInputTags] = useState('');
 
    let data2 = data1.map((data1) => {
       return <tr key={data1.id}>
          <td>{data1.english}</td>
          <td>{data1.transcription}</td>
          <td>{data1.russian}</td>
          <td>{data1.tags}</td>
          <td><button onClick={()=>{setIsEdit(true)}} className='edit-button'></button></td>
          <td><button onClick={()=>{setIsSave(true)}} className='delete-button'></button></td>
              </tr>;
    });
 
    return <React.Fragment>


      {!isEdit &&  
    <table>
       <thead>
          <tr>
             <th>Слово</th>
             <th>Транскрипция</th>
             <th>Перевод</th>
             <th>Тема</th>
             <th className='common-buttons'></th>
             <th className='common-buttons'></th>
          </tr>
       </thead>
       <tbody>
          {data2}
       </tbody>
       </table>}

       {isEdit && <table>
       <thead>
          <tr>
             <th>Слово</th>
             <th>Транскрипция</th>
             <th>Перевод</th>
             <th>Тема</th>
             <th className='common-buttons'></th>
             <th className='common-buttons'></th>
          </tr>
       </thead>
       <tbody>
       <tr>
    <td><input value={InputEnglish} type='text' onChange={event => setInputEnglish(event.target.value)}></input></td>
    <td><input value={InputTranscription} type='text' onChange={event => setInputTranscription(event.target.value)}></input></td>
    <td><input value={InputRussian} type='text' onChange={event => setInputRussian(event.target.value)}></input></td>
    <td><input value={InputTags} type='text' onChange={event => setInputTags(event.target.value)}></input></td>
    <td><button onClick={()=>{setIsEdit(true)}} className='save-button'>Сохранить</button></td>
    <td><button className='cancel-button'>Отмена</button></td>
    </tr>
    <tr>
          <td>{InputEnglish}</td>
          <td>{InputTranscription}</td>
          <td>{InputRussian}</td>
          <td>{InputTags}</td>
          <td><button onClick={()=>{setIsEdit(true)}} className='edit-button'></button></td>
          <td><button onClick={()=>{setIsSave(true)}} className='delete-button'></button></td>
              </tr>
       </tbody>
       </table>}

       {isSave && <table>
       <thead>
       <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th className='common-buttons'></th>
          <th className='common-buttons'></th>
       </tr>
    </thead>
    <tbody>
       {data2}
    </tbody>
    </table>
       }

       </React.Fragment>
}

export default Table;

/*{isEdit &&
    <table>
    <thead>
       <tr>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Тема</th>
          <th className='common-buttons'></th>
          <th className='common-buttons'></th>
       </tr>
    </thead>
    <tbody>
    <tr>
 <td><input type='text'></input></td>
 <td><input type='text'></input></td>
 <td><input type='text'></input></td>
 <td><input type='text'></input></td>
 <td><button onClick={()=>{setIsEdit(true)}} className='save-button'>Сохранить</button></td>
 <td><button className='cancel-button'>Отмена</button></td>
 </tr>
    </tbody>
    </table>} */