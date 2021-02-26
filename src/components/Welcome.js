import React, {Component} from 'react';

import {Container, Jumbotron, Button} from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import image from'../image/w1.jpg';
import svg1 from '../image/welcome_svg/call-center.svg'
import svg2 from '../image/welcome_svg/garant.svg'
import svg3 from '../image/welcome_svg/speed.svg'

import Callback from './Callback.js'


const jumb = {
  backgroundColor: '#202020'
};



var arr=[
{image: svg1,
name:'call-center'
}, 
{image: svg2,
name:'garant'
}, 
{image: svg3,
name:'speed'
}
];
export default class Welcome extends Component{

	render(){
		return(
              <Jumbotron className="text-white" style={jumb} id="main">
                <Container className="textWelc">
                  <p className="textTitle" >Автосервис RefreshAuto</p>
                  <p className="textPostTitle">
                    Прокачай свой автомобиль
                  </p>
                </Container>
                <img src={image} className="imgWelc" />

				<Container className="cWelc">
				    <Grid container  spacing={2}>
				      <Grid item xs={12}>
				        <Grid container justify="center" spacing={8}  >
				          {arr.map((value) => (
				            <Grid key={value} item className="trio">
				            	<img className={value.name} src={value.image} />
				            </Grid>
				          ))}
				        </Grid>
				      </Grid>
				    </Grid>
				</Container>

                <Callback/>
              </Jumbotron>
              

			);
	}
}


