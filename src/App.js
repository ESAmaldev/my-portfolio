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
      <br></br>
  </header>
      
      <div className="Contenth">
        <br></br>
      <div id="home">
        <Home />
        </div>
        <br></br>
        <br></br>
        <div id="education">

        <Education />
        
</div>
<br></br>
<br></br>
<div id="experience">

<Experience />
      
        </div>
        </div>
    </div>
  );
}

export default App;
