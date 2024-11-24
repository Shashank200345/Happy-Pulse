import { useState } from 'react';
import Navbar from './Components/Navigation/Navbar';
 // Correct pimportath with file name
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      
    </>
  );
}

export default App;


