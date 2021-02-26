import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Price from "./pages/price"
import Footer from './components/Footer.js';
import { BrowserRouter, Route } from 'react-router-dom';







function App() {

return(
  <BrowserRouter>
    <NavigationBar/>
    
    <Route path='/' exact component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/price' component={Price}></Route>

    <Footer/>
  </BrowserRouter>
  

);

{/*
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

        
        <Footer/>
    </div>
  );
*/}
  
}

export default App;


