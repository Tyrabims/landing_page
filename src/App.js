import './App.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
       <Navbar />
       <Routes>
          <Route path='/' element={ <Main /> } />
       </Routes>       
    </>
  );
  
}

export default App;
