import React, { Component } from 'react';


import Nissan from '../image/auto/nissan.svg'
import Toyota from '../image/auto/toyota.png'
import Subaru from '../image/auto/subaru.svg'
import Mitsubishi from '../image/auto/mitsubishi.png'
import Audi from '../image/auto/audi.png'
import BMW from '../image/auto/bmw.svg'
import Porsche from '../image/auto/porsche.svg'
import MercedesBenz from '../image/auto/mercedesbenz.svg'
import Ford from '../image/auto/Ford.svg'
import Honda from '../image/auto/honda.svg'
import Mazda from '../image/auto/mazda.svg'
import Volkswagen from '../image/auto/volkswagen.svg'
import Jaguar from '../image/auto/Jaguar_logo.svg'
import Mini from '../image/auto/mini.svg'
import Landrover from '../image/auto/landrover.svg'
import Bently from '../image/auto/Bentley_logo.svg'


export default class CustomSlider extends Component {
  render() {

    return (
          <div class="container text-center my-3">
              <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel" data-interval="4000">
                  <div class="carousel-inner w-100" role="listbox">
                      <div class="carousel-item row no-gutters active">
                          <img alt="Ремонт Nissan в Москве" src={Nissan}/>
                          <img alt="Ремонт Toyota в Москве" src={Toyota}/>
                          <img alt="Ремонт Subaru в Москве" src={Subaru}/>
                          <img alt="Ремонт Mitsubishi в Москве" src={Mitsubishi}/>
                      </div>
                      <div class="carousel-item row no-gutters">
                          <img alt="Ремонт BMW в Москве" src={BMW}/>
                          <img alt="Ремонт Mercedes-Benz в Москве" src={MercedesBenz}/>
                          <img alt="Ремонт Porsche в Москве" src={Porsche}/>
                          <img alt="Ремонт Audi в Москве" src={Audi}/>
                      </div>
                      <div class="carousel-item row no-gutters">
                          <img alt="Ремонт Ford в Москве" src={Ford}/>
                          <img alt="Ремонт Honda в Москве" src={Honda}/>
                          <img alt="Ремонт Mazda в Москве" src={Mazda}/>
                          <img alt="Ремонт Volkswagen в Москве" src={Volkswagen}/>
                      </div>
                      <div class="carousel-item row no-gutters">
                          <img alt="Ремонт Landrover в Москве" src={Landrover}/>
                          <img alt="Ремонт Jaguar в Москве" src={Jaguar}/>
                          <img alt="Ремонт Bently в Москве" src={Bently}/>
                          <img alt="Ремонт Mini в Москве" src={Mini}/>
                      </div>
                  </div>
              </div>
          </div>    
);
  }
}