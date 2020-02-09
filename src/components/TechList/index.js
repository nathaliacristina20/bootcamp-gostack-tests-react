import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Container } from './styles';

import { addTech } from '../../store/modules/techs/actions';

export default function TechList() {

  //const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs)
  // useEffect(() => {

  //   const techs = localStorage.getItem('techs');

  //   if (techs){
  //     setTechs(JSON.parse(techs));
  //   }

  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('techs', JSON.stringify(techs));
  // }, [techs]);

  function handleAddTech(){
    dispatch(addTech(newTech));
    // setTechs([ ...techs, newTech]);
    setNewTech('');
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <label htmlFor="tech">Tech</label>
      <input 
        type="text" 
        id="tech" 
        value={newTech} 
        onChange={e => setNewTech(e.target.value)} />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}

// export default function TechList() {

//   const [techs, setTechs] = useState([]);

//   function handleAddTech(){
//     setTechs([ ...techs, 'Node.js']);
//   }

//   return (
//     <div>
//       <ul data-testid="tech-list">
//         {techs.map(tech => <li key={tech}>{tech}</li>)}
//       </ul>
//       <button onClick={handleAddTech}>Adicionar</button>
//     </div>
//   );
// }
