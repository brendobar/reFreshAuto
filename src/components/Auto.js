import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import CustomSlider from '../components/CustomSlider.js'


import im from '../image/paralax_photo.jpg'




const text = {
  color:'#ccc',
  margin: '0 15vw',
  width: '70vw',
  paddingTop:'2vw'
};
const bigText = {
	fontSize: '4vw',
}
const littleText = {
	fontSize: '2vw',
	marginTop: '5vw',
	textShadow: 'black 2px 3px 3px, black 3px 4px 0.3em',
}


export default class Auto extends Component{
	render(){
		return(
				        <div className="parallax-window" data-parallax="scroll" data-image-src={im} data-natural-width="1400" data-natural-height="900" style={{minHeight:'50vw'}}>
				        	<div style={text}>
				        		<p style={bigText}>Марки авто</p>
                            	<p style={littleText}>Мы производим ремонт всех марок авто по недорогой цене в Москве: Toyota, Chevrolet, LADA (ВАЗ), BMW, Citroen, Daewoo, Dodge, Ford, Great Wall, Honda, Hyundai, Infiniti, Jeep, Kia, Land Rover, Lexus, MINI, Mazda, Mercedes-Benz, Mitsubishi, Nissan, Opel, Peugeot, Porsche, Renault, SsangYong, Subaru, Suzuki, Volvo, ГАЗ, УАЗ и другие.</p>
                            	
				        	</div>
				        	<CustomSlider/>
                        </div>


		);


		

	}
}