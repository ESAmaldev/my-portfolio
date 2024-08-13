import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './TopNav.css';

function TopNav() {
  return (

    <div class="topNav">
  <a class="active" href="#home"><h1>Home</h1></a> 
  <a class="active" href="#education">Education</a> 
  <a class="active" href="#experience">Experience</a> 
</div> 
   
  );
}

export default TopNav;