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
      
            <Home />
           <Education />
            <Experience />
        
        </div>
  );
}

export default App;
