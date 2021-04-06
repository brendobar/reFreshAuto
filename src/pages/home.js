import React,{Component} from 'react';
import '../App.css';
import Welcome from '../components/Welcome.js';
import Cardcontainer from '../components/Cardcontainer.js'
import Auto from '../components/Auto.js'
import Waitroom from '../components/Waitroom.js'
import {Container, Row, Col, Button} from 'react-bootstrap';

export default class Home extends Component{
    render(){
        const marginTop = {
            marginTop: "6vw"
          };
        return (
            <div className="App">
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
            
            </div>
          );
    }
}