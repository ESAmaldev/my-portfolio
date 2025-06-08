import './App.css';
import TopNav from './components/TopNav';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
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
        </div>
  );
}

export default App;
