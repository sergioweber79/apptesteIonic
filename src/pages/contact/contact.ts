import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RemoteService } from '../providers/RemoteService';

import { GraficoPage } from '../grafico/grafico';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  consultas=[];

  constructor(public navCtrl: NavController, private remoteService : RemoteService) {
    this.findAll();
  }


  findAll(){
    
        this.remoteService.getConsultas().subscribe((data)=>{
          this.consultas = data;
        });
  }
      
    
  openGrafico(consulta)
    {
  
      this.navCtrl.push(GraficoPage,
        {
          id: consulta.id
        }
      );
  }

  

}
