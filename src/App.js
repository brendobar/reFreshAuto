import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome.js';
import Cardcontainer from './components/Cardcontainer.js'
import Auto from './components/Auto.js'
import About from './components/About.js'
import Waitroom from './components/Waitroom.js'
import Footer from './components/Footer.js';
import {Container, Row, Col, Button} from 'react-bootstrap';







function App() {

const marginTop = {
  marginTop: "10vw"
};



  return (
    <div className="App">
      <NavigationBar/>
        <Container>
          <Row>
          <Col lg={12} style={marginTop}>
              <Welcome/>
            </Col>
          </Row>
        </Container>

        <Cardcontainer/>

        <Auto/>
        <div style={{width:'0', height:'0', margin:'6vw 0'}}></div>

        <Waitroom/>
        <div style={{width:'0', height:'0', margin:'6vw 0'}}></div>

        <About/>
        <div style={{width:'0', height:'0', margin:'7vw 0'}}></div>
        
        <Footer/>
    </div>
  );
}

export default App;


