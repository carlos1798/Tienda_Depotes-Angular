import { Injectable } from "@angular/core";
import { Carrito  } from "./carrito.model";

@Injectable()
export class Orden{
    public id?:number;
    public nombre?:string;
    public direccion?:string;
    public ciudad?:string;
    public comAutonoma?:string;
    public codigoPostal?:string;
    public pais?:string;
    public enviado:boolean = false;
    
    constructor(public carrito:Carrito){}
    
    limpiar(){
        this.id = undefined;
        this.nombre = this.direccion =this.ciudad= undefined;
        this.comAutonoma = this.codigoPostal =this.pais= undefined;
        this.enviado = false;
        this.carrito.clear();
    }



}