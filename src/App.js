import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
