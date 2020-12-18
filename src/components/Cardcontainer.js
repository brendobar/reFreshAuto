import React, {Component} from 'react';
import {Button, Container} from 'react-bootstrap';
import Serviceсard from './Serviceсard.js'
import { Grid } from '@material-ui/core';

import brake from '../image/serviceimg/brake.svg'
import kpp from '../image/serviceimg/kpp.svg'
import suspencion from '../image/serviceimg/suspencion.svg'
import TO from '../image/serviceimg/TO.svg'
import elect from '../image/serviceimg/elect.svg'
import wheel from '../image/serviceimg/wheel.svg'
import engine from '../image/serviceimg/engine.svg'
import tuning from '../image/serviceimg/tuning.svg'




var arr=[
{
id:"1",
image: brake,
sName:'Ремонт тормозов',
coast:'от 500 руб.'
}, 
{
id:"2",
image: kpp,
sName:'Ремонт трансмиссии',
coast:'от 1000 руб.'
}, 
{
id:"3",
image: suspencion,
sName:'Ремонт подвески',
coast:'от 1000 руб.'
},
{
id:"4",
image: TO,
sName:'Тех. обслуживание',
coast:'от 2500 руб.'
},
{
id:"5",
image: elect,
sName:'Ремонт электрики',
coast:'от 500 руб.'
},
{
id:"6",
image: wheel,
sName:'Шиномонтаж',
coast:'от 500 руб.'
},
{
id:"7",
image: engine,
sName:'Ремонт двигателя',
coast:'от 1000 руб.'
},
{
id:"8",
image: tuning,
sName:'Тюнинг авто',
coast:'от 1000 руб.'
}
];




export default class Cardcontainer extends Component{
	render(){
		return(
			<Container className="gridCard" id="price">
			    <Grid container  spacing={2}>
			      <Grid item xs={12}>
			        <Grid container justify="center" spacing={8}>
			          {arr.map((value) => (
			            <Grid key={value} item >
			            	<Serviceсard image={value.image} sName={value.sName} coast={value.coast} />
			            </Grid>
			          ))}
			        </Grid>
			      </Grid>
			    </Grid>
			</Container>
			);


		

	}
}