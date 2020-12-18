import React,{Component} from 'react';
import {Container} from 'react-bootstrap';


import WIFI from '../image/wait/WIFI.svg'
import coffee from '../image/wait/coffee.svg'
import waitroom from '../image/wait/waitroom.svg'





export default class Waitroom extends Component{
	render(){
		return(
			<Container id="about">
				<p className="bTextWait">Автосервис с удобной зоной отдыха</p>
				<p className="lTextWait">Пока мы заботимся о вашем автомобиле, вы можете воспользоваться услугами в нашей зоне ожидания</p>


				<div className="imgWait">

				    <div className="div_dp">
				        <img className="dp" src={WIFI}/>
				        <div id="textbox">
				            <p className="textWait">Бесплатный WiFi</p>
				        </div>
				    </div>	

				    <div className="div_dp">
				        <img className="dp" src={coffee}/>
				        <div id="textbox">
				            <p className="textWait">Кофе, чай и легкие закуски</p>
				        </div>
				    </div>	

				    <div className="div_dp">
				        <img className="dp" src={waitroom}/>
				        <div id="textbox">
				            <p className="textWait">Удобный зал ожидания</p>
				        </div>
				    </div>	

				</div>
			</Container>
				
			);
	}
}