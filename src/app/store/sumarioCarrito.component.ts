import { Component } from "@angular/core";
import { Carrito } from "../model/carrito.model";

@Component({
  selector: "sumario-carrito",
  templateUrl: "sumarioCarrito.component.html"
})
export class CarritoSumarioComponent{
  constructor(public carrito:Carrito){}
}
