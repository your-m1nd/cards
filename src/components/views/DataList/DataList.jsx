import React from 'react';
import './DataList.scss';

function DataList() { 

  const words = [
    {
      id: 14426,
      name: "bag",
      transcription: "[bæg]",
      translation: "сумка",
      theme: "аксессуары",
    }
    ,
     {
      id: 14428,
      name: "hamster",
      transcription: "[ˈhæmstə]",
      translation: "хомяк",
      theme: "животное",
     },
  
     {
      id: 14429,
      name: "elephant",
      transcription: "[ˈelɪfənt]",
      translation: "слон",
      theme: "животное",
     },
  ];
  
  let data = words.map((word) => {
    return <tr key={word.id}>
      <td>{word.name}</td>
      <td>{word.transcription}</td>
      <td>{word.translation}</td>
      <td>{word.theme}</td>
      <td><button className='edit-button'></button></td>
      <td><button className='delete-button'></button></td>
    </tr>
  });

  return <React.Fragment>
  <table>
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
    <td><button className='save-button'>Сохранить</button></td>
    <td><button className='cancel-button'>Отмена</button></td>
    </tr>
  <tbody>
     {data}
  </tbody>
</table></React.Fragment>


}

export default DataList;