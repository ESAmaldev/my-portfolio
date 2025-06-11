import React from 'react';
import { Row, Col } from "react-bootstrap";
import './Home.css';
import Image from './Image.jpg';
import github from './static/icon-github.png';
import linkedin from './static/icon-linkedin.png';
import instagram from './static/icon-instagram.png';
import { Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="homediv">
        <h1 className="typewriter">Hi, I am Amaldev!!</h1>
        <br></br>
        <br></br>
        <Row className="section">
            <Col xs={10} md={5} xl={6} className="content">
                <div className="contentText">
                <br></br>
                <br></br>
                <h4 className="about">As an experienced IT Professional with over three years in full-stack development and technical support, I possess a strong background in designing and developing scalable web applications, creating RESTful APIs, and enhancing system performance. My technical expertise spans multiple programming languages and frameworks, including Java, Spring Boot, Python, Django, and React. I am also skilled at AWS, SQL and NoSQL databases.</h4>
                <br></br>  
                <h6 class="h6-partial-color"> <span> Skills: </span> Python, Django, Flask, Java, Spring, React, JavaScript, DSA, AWS, Problem solving, SQL, DBMS, mongoDB, Git. </h6>
                <h6 class="h6-partial-color"> <span> Certifications: </span> <a href="https://www.coursera.org/account/accomplishments/verify/HLT7C5A0SEJI"> Django,</a> <a href="https://www.linkedin.com/learning/certificates/b4a29e3ad6da4cc4f0bf6eb351b4853a60bebfd7260d0c838aabfad510d5519e"> JavaScript</a> </h6>
                </div> 
                <div className="contentIcon">     
                <a href="https://github.com/ESAmaldev" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/dev0amal/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                <a href="https://www.instagram.com/amaldev_es/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
                <br></br>
                <br></br>

                <Button href="https://drive.google.com/file/d/1Bi7ULA19-ovnnNyF1JaQmumGzKC6h6Gm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Button>
                <br></br>
                <br></br>
                </div>
            </Col>
            <Col xs={10} md={5} xl={4} className="imageBox">
            <img className="image" src={Image} alt="User" ></img>
            </Col>
        </Row>
    </div>
  );
}

export default Home;