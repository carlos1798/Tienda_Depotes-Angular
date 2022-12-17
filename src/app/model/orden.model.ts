import { Injectable } from "@angular/core";
import { Carrito  } from "./carrito.model";

@Injectable()
export class Orden{
    public id?:number;
    public name?:string;
    public address?:string;
    public city?:string;
    public state?:string;
    public zip?:string;
    public country?:string;
    public shipped:boolean = false;

    constructor(public carrito:Carrito){}

    limpiar(){
        this.id = undefined;
        this.name = this.address =this.city= undefined;
        this.state = this.zip =this.country= undefined;
        this.shipped = false;
        this.carrito.clear();
    }



}
