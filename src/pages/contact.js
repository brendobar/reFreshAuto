import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PointIcon from '@material-ui/icons/Room';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MailIcon from '@material-ui/icons/Mail';

const location = {
        lat: 55.637,
        lng: 37.3394,
        text: "ReFresh Auto"
    }


      const Map = ({ text }) => <div>{text}</div>;

export default class Contact extends Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

    render(){
        return(
            <div class="contactsInfo">
                <div class="textContent">
                    <h1>Контакты техцентра <br></br> «ReFresh Auto»</h1>
                    <p><PointIcon/> м. Каширская, ул.Москворечье, вл.2Ж</p>
                    <p><AccessTimeIcon/> Ежедневно 7.30 – 21.00</p>
                    <p><a href="mailto:refresh-auto@mail.ru"><MailIcon/> refresh-auto@mail.ru</a></p>
                    
                </div>
                <div class="mapContent">
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyB4dqGuxdcKF0fcET05OJqD456H9KylC1o"}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                    <Map
                        lat={location.lat}
                        lng={location.lng}
                        text={location.text}
                    />
                </GoogleMapReact>
                </div>
            </div>
        );
    }
}


//AIzaSyB4dqGuxdcKF0fcET05OJqD456H9KylC1o