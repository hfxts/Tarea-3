import { Component } from '@angular/core';
import {  ModalController} from "@ionic/angular";
import { ImagenModalPage } from "../imagen-modal/imagen-modal.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private ModalCtrl : ModalController){

  }

  imagenes = [
    '../assets/galeria/3.jpg',
    '../assets/galeria/4.jpg',
    '../assets/galeria/2.jpg',
    '../assets/galeria/5.jpg',
    '../assets/galeria/6.jpg',
    '../assets/galeria/7.jpg',
    '../assets/galeria/8.jpg',
  ];

  verImagen(imagen)
  {
    this.ModalCtrl.create({
      component : ImagenModalPage,
      componentProps : {
        imagen : imagen
      }
    }).then(modal => modal.present())
  
  }

}
