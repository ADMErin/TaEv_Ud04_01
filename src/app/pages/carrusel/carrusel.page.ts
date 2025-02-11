import { CamaraService } from './../../servicios/camara.service';
import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.page.html',
  styleUrls: ['./carrusel.page.scss'],

})

export class CarruselPage implements OnInit {

  options={
    initialSlide: 0,
    spaceBetween: 5,
    pagination: true,
    navigation: true,
    speed: 400,
    init: true
   }; 

  constructor(public usarCamara: CamaraService) { }

  ngOnInit() {
  }

}
