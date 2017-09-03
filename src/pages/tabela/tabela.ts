import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabela',
  templateUrl: 'tabela.html'
})
export class TabelaPage {


  pageBack=HomePage;

  constructor(public navCtrl: NavController) {

  }

  voltar()
  {
    
    //this.navCtrl.setRoot(this.pageBack);
    this.navCtrl.pop();
    
  }

  
}
