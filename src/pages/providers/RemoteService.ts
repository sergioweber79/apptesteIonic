import {Http ,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteService {

    //desenvolvimento local
   // getApiUrlConsulta : string = "http://localhost:8080/api/consultas";
    //getApiUrlTabelaConsulta : string = "http://localhost:8080/api/tabela/";

    
    //homologacao digitalocean
    getApiUrlConsulta : string = "http://107.170.67.212:8180/api/consultas";
    getApiUrlTabelaConsulta : string = "http://107.170.67.212:8180/api/tabela/";
    
    
    constructor(private http: Http) {}

    getConsultas() {
    
        return  this.http.get(this.getApiUrlConsulta)
                .do((res : Response ) => console.log(res.json()))
                .map((res : Response ) => res.json())     ;
    }


    getTabelaConsultas(id) {
        
            
            return  this.http.get(this.getApiUrlTabelaConsulta+id)
                    .do((res : Response ) => console.log(res.json()))
                    .map((res : Response ) => res.json())     ;
        }

}