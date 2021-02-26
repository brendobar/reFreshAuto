import React, {Component} from 'react';
import Pop from './Pop.js'




export default class Serviceсard extends Component{

	render(){
		return(
		    <div id="card">
		        <img className="dp" alt={this.props.sName} src={this.props.image}/>
		        <div id="textbox">
		            <p className="text">{this.props.sName}</p>
					<p className="text">{this.props.coast}</p>
		        </div>
		        <Pop/>
		        
		    </div>
		);
	}
}






