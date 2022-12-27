import { Component } from "@angular/core";
import { Carrito } from "../model/carrito.model";
import { ConnectionService } from "../model/connection.service";

@Component({
    templateUrl: "detallesCarrito.component.html"
}) export class detallesCarritoComponent{
  public connected : boolean = false;
  constructor(public carrito: Carrito, private connection: ConnectionService) {
    this.connected = this.connection.connected;
    connection.Changes.subscribe((state)=> this.connected = state)
    }
}

