import React,{Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";



export default class NavigationBar extends Component {
    render(){
        return(
        <div>
          <Navbar variant="dark" style={{ zIndex:'9999', width:'100%', backgroundColor: '#202020'}}>
            <Navbar.Brand href="#"><img class="logo" src="../logo.svg"/><img style={{width: '20vw'}} src="../logo2.svg"/></Navbar.Brand>
            <Nav className="ml-auto" style={{paddingRight: '5vw'}}>

              <a href="/">Главная</a>
              <a href="/price">Цены</a>
              <a href="/contact">Контакты</a>
              <a href="/about">О Нас</a>

            </Nav>
          </Navbar>
        </div>);
    }
}


