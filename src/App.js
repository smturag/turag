// eslint-disable-next-line
import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Container,Nav} from 'react-bootstrap'
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from './Page/Home.jsx'
import About from './Page/About'
import Skills from './Page/Skills'
import Blog from './Page/Blog'
import './Style/App.scss'
import myFile from '../src/images/Turag.pdf'
import fb from '../src/images/fb.jpg'
import gh from '../src/images/gh.jpg'


function App() {
 useEffect(()=>{
  document.title = "Turag World";
 })
 function newTab(a){
   a===1? window.open("https://www.facebook.com/S.M.Turag"):  window.open("https://github.com/smturag")
  
 }
  return (
    <>    
    <div className='main'>    
    <Router>        
       <Navbar sticky='top' bg="black" variant="light" >
        <Container>
        <Navbar.Brand className="text-white" href="/home">S M Turag</Navbar.Brand>        
        <Nav className="float-left">
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" href="/turag">Home</Nav.Link>
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" href="/about">About</Nav.Link>
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" href="/skills">Skills</Nav.Link>
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" href="/blog">Blog</Nav.Link>
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" href={myFile}  download="Turag.pdf">CV</Nav.Link>
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" onClick={()=> newTab(1)}> <img width={20} height={20} src={fb} /></Nav.Link>
        <Nav.Link exact="true" className="text-white navText" activeclassname="active" onClick={()=> newTab(2)}> <img width={20} height={20} src={gh} /></Nav.Link>
        </Nav>        
        </Container>
    </Navbar>

    <Switch>
  
    <Route exact path="/turag">
    <Home/>
      </Route>
      <Route exact path="/home">
    <Home/>
      </Route>
      <Route exact path="/" render={() => (<Redirect to="/turag" />)} /> 
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/skills">
        <Skills/>
      </Route>
      <Route path="/blog">
        <Blog/>
      </Route>      
    </Switch>
    </Router>   
    </div>
    </>
  );
}

export default App;
