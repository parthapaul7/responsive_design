import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <div className="mx-auto overflow-x-hidden">
        <Main />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
