import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabelaPage } from '../tabela/tabela';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  openTabela()
  {
    //this.navCtrl.setRoot(TabelaPage)
    this.navCtrl.push(TabelaPage);
  }
}
