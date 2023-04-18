import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';




function App() {
  return (
    <Router>
       <Navbar />
       <Routes>
          <Route path='/' />
          <Route path='/Properties' />
          <Route path='/Members' />
          <Route path='/Pages' />
          <Route path='/Blogs' />
          <Route path='/Login' />
          <Route path='/Signup' />
       </Routes>       
    </Router>
  )
};

export default App;
