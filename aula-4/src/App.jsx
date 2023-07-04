import './App.css';
import ColorChanger from './components/ColorChanger';
import { useState } from 'react';

const App = () => {
  const [showBtn, setShowBtn] = useState(true);
  return (
    <div className='App'>
      <h1>Exercício de Mudança de Cor</h1>
      {showBtn && <ColorChanger />}
      <button onClick={() => setShowBtn(!showBtn)}>Show/Hide</button>
    </div>
  );
};


export default App;