import React, { useState} from 'react';
import './DataList.scss';
import Data from '../../comps/Data/Data.json';

const data = JSON.stringify(Data);
const data1 = JSON.parse(data);

function DataList() { 
  
  const [isEdit, setIsEdit] = useState(false);
  const [isSave, setIsSave] = useState(false);

  let data2 = data1.map((data1) => {
    return <tr key={data1.id}>
      <td>{data1.english}</td>
      <td>{data1.transcription}</td>
      <td>{data1.russian}</td>
      <td>{data1.tags}</td>
      <td><button onClick={()=>{setIsEdit(false)}} className='edit-button'></button></td>
      <td><button onClick={()=>{setIsEdit(false)}} className='delete-button'></button></td>
    </tr>

  });

  return <React.Fragment>
    {isEdit && 
  <table>
     <tr>
        <th>СЛОВО</th>
        <th>ТРАНСКРИПЦИЯ</th>
        <th>ПЕРЕВОД</th>
        <th>ТЕМА</th> 
        <th className='common-buttons'></th>
        <th className='common-buttons'></th>
     </tr>
  <tbody>
     {data2}
  </tbody>
</table>}
{isSave && <table>
     <tr>
        <th>СЛОВО</th>
        <th>ТРАНСКРИПЦИЯ</th>
        <th>ПЕРЕВОД</th>
        <th>ТЕМА</th> 
        <th className='common-buttons'></th>
        <th className='common-buttons'></th>
     </tr>
  <tbody>
     {data2}
  </tbody>
</table>}

{!isEdit && <table>
     <tr>
        <th>СЛОВО</th>
        <th>ТРАНСКРИПЦИЯ</th>
        <th>ПЕРЕВОД</th>
        <th>ТЕМА</th> 
        <th className='common-buttons'></th>
        <th className='common-buttons'></th>
     </tr>
<tr>
    <td><input type='text'></input></td>
    <td><input type='text'></input></td>
    <td><input type='text'></input></td>
    <td><input type='text'></input></td>
    <td><button onClick={()=>{setIsEdit(true)}} className='save-button'>Сохранить</button></td>
    <td><button className='cancel-button'>Отмена</button></td>
    </tr> </table>}
</React.Fragment>

}

export default DataList;