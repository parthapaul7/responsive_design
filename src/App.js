import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className='overflow-x-hidden'>
    <NavBar/>
    <Main/>
    <Courses/>
    <Contact/>
    <Footer/>
    </div>
   
  );
}

export default App;
