import { Component } from "@angular/core";
import { Orden } from "../model/orden.model";
import { OrdenRepositorio } from "../model/orden.repository";
import { NgForm } from "@angular/forms";

@Component({

    templateUrl: "pasarCaja.component.html",
    styleUrls: ["pasarCaja.component.css"]
})
export class pasarCajaComponent{

    shipped:boolean = false;
    submitted: boolean = true;

    constructor(public repositorio:OrdenRepositorio,public orden:Orden){}

    procesarOrden(form:NgForm){
        this.submitted = true;
        if (form.valid) {
            this.repositorio.guardarOrden(this.orden).subscribe(orden =>{
                this.orden.limpiar();
                this.shipped = true;
                this.submitted = false;
            });

        }
    }

}
