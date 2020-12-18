import React, {Component} from 'react';

import {Container} from 'react-bootstrap';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ru from "date-fns/locale/ru";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



import brake from '../image/serviceimg/brake.svg'
import kpp from '../image/serviceimg/kpp.svg'
import suspencion from '../image/serviceimg/suspencion.svg'
import TO from '../image/serviceimg/TO.svg'
import elect from '../image/serviceimg/elect.svg'
import wheel from '../image/serviceimg/wheel.svg'
import engine from '../image/serviceimg/engine.svg'
import tuning from '../image/serviceimg/tuning.svg'

import AccessTimeIcon from '@material-ui/icons/AccessTime';


const call_t = {
  position:'relative',
  left:'12%',
  color:'#fd7e14',
  borderColor:'#fd7e14',
  padding: '0.5vw 20vw',
  fontSize: '1.5vw',
  margin: '2vw'
}
const cont = {
  textAlign:'center',
  width:'70vw',
  maxWidth:'unset'
}

const di = {
  marginLeft: '5vw'
}





export default class Form extends Component{

    constructor(props) {
            super(props);
            this.state={type:'',telephone:'', breaking:'', auto:'', date:new Date(Date.now())};
            this.submitClient = this.submitClient.bind(this);
            this.clientChange = this.clientChange.bind(this);
            this.convertToMillis = this.convertToMillis.bind(this);

  	}




	convertToMillis(dateString) {
		const tempMass = dateString.split("/");
		[tempMass[0], tempMass[1]] = [tempMass[1], tempMass[0]];
		const dateStr = tempMass.join('/');
		const date = new Date(tempMass.join('/')).toDateString();
		return date;
	}


    dateChange(event, date) { 
    	var mainDate = new Date(this.state.date);
    	var value = (date.includes(":")) ? mainDate.toDateString() + " " + date : this.convertToMillis(date) + " " + mainDate.toTimeString();
		this.setState({date: value});
	}



    clientChange(event){
    	this.setState({
    		[event.target.name]: event.target.value
    	});
    }   

    checkboxChange(event){
    	var last = this.state.type;
    	var value = (event.target.checked) ? ((last === "") ? last + event.target.id : last + " " + event.target.id) : last.replace(event.target.id, "");
    	this.setState({type: value.trim()});
    } 


    submitClient(event){
      //alert('type: ' + this.state.type + ' telephone: ' + this.state.telephone + ' breaking: ' + this.state.breaking + ' auto: ' + this.state.auto + ' date: ' + this.state.date);
      alert("Заявка успешно сформирована, ожидайте смс")
      event.preventDefault();
    }





	render(){
		return(
	            <form onSubmit={this.submitClient} id="breaking-form">



                <Container style={cont}>

                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Ремонт тормозов" class="t-img-select" id="1"/>
                        <label id="card" for="1">
	                        <img className="dp" src={brake}/>
	                        <div id="textbox">
	                            <p className="text">Ремонт тормозов</p>
	                        </div>
                        </label>

                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Ремонт трансмиссии" class="t-img-select" id="2"/>
                        <label id="card" for="2">
	                        <img className="dp" src={kpp}/>
	                        <div id="textbox">
	                            <p className="text">Ремонт трансмиссии</p>
	                        </div>
                        </label>
             
                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Ремонт подвески" class="t-img-select" id="3"/>
                        <label id="card" for="3">
	                        <img className="dp" src={suspencion}/>
	                        <div id="textbox">
	                            <p className="text">Ремонт подвески</p>
	                        </div>
                        </label>
             
                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Техническое обслуживание" class="t-img-select" id="4"/>
                        <label id="card" for="4">
	                        <img className="dp" src={TO}/>
	                        <div id="textbox">
	                            <p className="text">Тех. обслуживание</p>
	                        </div>
                        </label>

                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Ремонт электрики" class="t-img-select" id="5"/>
                        <label id="card" for="5">
	                        <img className="dp" src={elect}/>
	                        <div id="textbox">
	                            <p className="text">Ремонт электрики</p>
	                        </div>
                        </label>

                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Шиномонтаж" class="t-img-select" id="6"/>
                        <label id="card" for="6">
	                        <img className="dp" src={wheel}/>
	                        <div id="textbox">
	                            <p className="text">Шиномонтаж</p>
	                        </div>
                        </label>

                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Ремонт двигателя" class="t-img-select" id="7"/>
                        <label id="card" for="7">
	                        <img className="dp" src={engine}/>
	                        <div id="textbox">
	                            <p className="text">Ремонт двигателя</p>
	                        </div>
                        </label>

                    <input onChange={this.checkboxChange.bind(this)} type="checkbox" name="type" value="Тюнинг авто" class="t-img-select" id="8"/>
                        <label id="card" for="8">
	                        <img className="dp" src={tuning}/>
	                        <div id="textbox">
	                            <p className="text">Тюнинг авто</p>
	                        </div>
                        </label>

                </Container>

                <p style={di}>
               	Контактный номер телефона
                </p>

                <TextField
                  autoFocus
                  margin="dense"
                  name="telephone"
                  value={this.state.telephone}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <p style={di}>
                Опишите неисправность
                </p>

                <TextField
                  autoFocus
                  margin="dense"
                  name="breaking"
                  value={this.state.breaking}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <p style={di}>
                Укажите марку и модель Вашего автомобиля
                </p>

                <TextField
                  autoFocus
                  margin="dense"
                  name="auto"
                  value={this.state.auto}
                  onChange={this.clientChange.bind(this)}
                  label=""
                  fullWidth
                  required
                />

                <p style={di}>
                Выберите желаемую дату визита
                </p>

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      margin="normal"
                      format="dd/MM/yyyy"
                      disablePast="true"
                      id="date-picker-inline"
                      name="date"
                      value={this.state.date}
                  	  onChange={this.dateChange.bind(this)}
                      label=""
                      

                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                        svg: {AccessTimeIcon},
                      }}
                    />
                </MuiPickersUtilsProvider>

                <p style={di}>
                Выберите удобное для Вас время
                </p>

                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
                <KeyboardTimePicker
                  margin="normal"
                  ampm={false}
                  openTo="hours"
                  id="time-picker"
                  name="time"
                  value={this.state.date}
                  onChange={this.dateChange.bind(this)}
                  label=""
                  
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
                </MuiPickersUtilsProvider>

                <Button  variant="outlined" style={call_t} type="submit">
            		Отправить
          		</Button>
            </form>
            );
	}
}