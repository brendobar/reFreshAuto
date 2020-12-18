import React,{Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


export default class NavigationBar extends Component {
    render(){
        return(
        <div>
          <Navbar variant="dark" style={{position:'fixed', zIndex:'9999', width:'100%', backgroundColor: '#202020'}}>
            <Navbar.Brand href="#"><img class="logo" src="../logo.svg"/><img style={{width: '20vw'}} src="../logo2.svg"/></Navbar.Brand>
            <Nav className="ml-auto" style={{paddingRight: '5vw'}}>

    <Link
    activeClass="active"
    to="main"
    spy={true}
    smooth={true}
    offset={-120}
    duration={500}
    >Главная</Link>

    <Link
    activeClass="active"
    to="price"
    spy={true}
    smooth={true}
    offset={-120}
    duration={500}
    >Цены</Link>

    <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={-120}
    duration={500}
    >О нас</Link>



            </Nav>
          </Navbar>
        </div>);
    }
}


