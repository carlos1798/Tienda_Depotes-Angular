import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Orden } from "../model/orden.model";
import { OrdenRepositorio } from "../model/orden.repository";

@Component({

    templateUrl: "pasarCaja.component.html",
    styleUrls: ["pasarCaja.component.css"]
})
export class pasarCajaComponent{

    ordenEnviada:boolean = false;
    procesada: boolean = true;

    constructor(public repositorio:OrdenRepositorio,public orden:Orden){}

    procesarOrden(form:NgForm){
        this.procesada = true;
        if (form.valid) {
            this.repositorio.guardarOrden(this.orden).subscribe(orden =>{
                this.orden.limpiar();
                this.ordenEnviada = true;
                this.procesada = false;
            });
            
        }
    }

}
