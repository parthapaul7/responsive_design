import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Courses from './components/Courses';
import Contact from './components/Contact';
function App() {
  return (
    <div className='overflow-x-hidden'>
    <NavBar/>
    <Main/>
    <Courses/>
    <Contact/>
    </div>
   
  );
}

export default App;
