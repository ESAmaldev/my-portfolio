import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <header>
      < TopNav />
  </header>
       
       <div id="home">
            <Home />
            </div>


             <div id="education">
                <Education />
              </div>


        


          <div id="experience">
            <Experience />
          </div>

          <div id="projects">
            <Projects />
          </div>
          <Footer />
        </div>
  );
}

export default App;
