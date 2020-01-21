import React, { useState } from 'react';

// import { Container } from './styles';

export default function TechList() {

  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech(){
    setTechs([ ...techs, newTech]);
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
