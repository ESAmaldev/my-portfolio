import React from 'react';
import './Home.css';
import Image from './Image.png';
import github from './static/icon-github.png';
import linkedin from './static/icon-linkedin.png';
import instagram from './static/icon-instagram.png';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="homediv">
      <br></br>
        <h1>Hi, welcome to my portfolio!!</h1>
        <br></br>
        <br></br>
        <div className="section">
        <div className="content">
        <div className="contentText">
        <br></br>
        <br></br>
        <h4>As an experienced software developer with over three years in full-stack development and technical support, I possess a strong background in designing and developing scalable web applications, creating RESTful APIs, and enhancing system performance. My technical expertise spans multiple programming languages and frameworks, including Java, Spring Boot, Python, Django, and React. I am also skilled at AWS, SQL and NoSQL databases.</h4>
        <br></br>  
        </div>      
        <a href="https://github.com/ESAmaldev" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/dev0amal/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
        <a href="https://www.instagram.com/amaldev_es/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
        <br></br>
        <br></br>

        <Button href="https://drive.google.com/file/d/1Bi7ULA19-ovnnNyF1JaQmumGzKC6h6Gm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Button>
        <br></br>
        </div>
        <div className="imageBox">
        <img className="image" src={Image} alt="User" ></img>
        </div>
    </div>
    </div>
  );
}

export default Home;