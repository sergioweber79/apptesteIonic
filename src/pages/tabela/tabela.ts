import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { RemoteService } from '../providers/RemoteService';

@Component({
  selector: 'page-tabela',
  templateUrl: 'tabela.html'
})
export class TabelaPage {
      
  tabelas = [];

  idConsulta=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private remoteService : RemoteService) {
    this.idConsulta = navParams.get("id");
    this.findAll();
  }


  findAll(){
    
        this.remoteService.getTabelaConsultas(this.idConsulta).subscribe((data)=>{
          this.tabelas = data;
        });
  }

  voltar()
  {
    
    this.navCtrl.pop();
    
  }

  
}
