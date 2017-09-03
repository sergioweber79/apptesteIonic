import { Component } from '@angular/core';
import { NavController,Platform, ActionSheetController } from 'ionic-angular';

import { TabelaPage } from '../tabela/tabela';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform,
    public actionsheetCtrl: ActionSheetController) {  }

  openMenuConfig() {
    let actionSheet = this.actionsheetCtrl.create({
      title: '',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Perfil',
          icon: !this.platform.is('ios') ? 'person' : null,
          handler: () => {
            console.log('Perfil clicked');
          }
        },
        {
          text: 'Configurações',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'cube' : null,
          handler: () => {
            console.log('Config clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openTabela()
  {
    //this.navCtrl.setRoot(TabelaPage)
    this.navCtrl.push(TabelaPage);
  }
}