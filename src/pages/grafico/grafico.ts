import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { RemoteService } from '../providers/RemoteService';



@Component({
  selector: 'page-grafico',
  templateUrl: 'grafico.html'
})
export class GraficoPage {
      
  graficos = [];

  idConsulta=0;

   // Pie
  public pieChartLabels:string[]=[];//["Camacari","Salvador","Candeias","Simões Filho"];
  public pieChartData:number[]=[];//[300,200,100,250,250];
  public pieChartType:string = 'pie';

  constructor(public navCtrl: NavController, public navParams: NavParams, 
          private remoteService : RemoteService) {
            
    this.idConsulta = navParams.get("id");
    
    this.findAll();
     
       
  }


  findAll(){
    
        this.remoteService.getTabelaConsultas(this.idConsulta)
          .subscribe((data)=>{
                this.graficos = data;

          
      
                console.log("qtd tabelas: "+this.graficos["tabela"].length);
                for (var i = 0; i < this.graficos["tabela"].length; i++) {
                  console.log("label "+this.graficos["tabela"][i].campo);
                  this.pieChartLabels.push(this.graficos["tabela"][i].campo);
                  this.pieChartData.push(this.graficos["tabela"][i].total);
                }
            
                console.log("qtd labels: "+this.pieChartLabels.length);
        });

  }

  voltar()
  {
    
    this.navCtrl.pop();
    
  }

 
  // events
  public chartClicked(e:any):void {
    console.log(e);
    console.log("qtd labels: "+this.pieChartLabels.length);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  
}
