import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabelaPage } from '../tabela/tabela';


import { RemoteService } from '../providers/RemoteService';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  consultas=[];

  
  constructor(public navCtrl: NavController, private remoteService : RemoteService) {
    this.findAll();
  }


  findAll(){

    this.remoteService.getConsultas().subscribe((data)=>{
      this.consultas = data;
    });


  }
  

  openTabela(consulta)
  {

    this.navCtrl.push(TabelaPage,
      {
        id: consulta.id
      }
    );
  }
}
