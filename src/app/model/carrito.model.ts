import {Injectable } from "@angular/core";
import { Producto } from "./producto.model";

@Injectable()
export class Carrito{
  public lineas: LineaCarrito[] = [];
  public numeroItems: number = 0;
  public precioCarrito: number = 0;

  addLinea(producto: Producto, cantidad: number = 1) {
    let linea = this.lineas.find(linea => linea.producto.id == producto.id);
    if (linea != undefined) {
      linea.cantidad += cantidad;
    } else {
      this.lineas.push(new LineaCarrito(producto, cantidad));
    }
    this.recalcular();
  }
  updateCantidad(producto: Producto, candidad: number) {
    let linea = this.lineas.find(linea => linea.producto.id == producto.id);
   if (linea != undefined) {
     linea.cantidad = Number(candidad);
    }

  }
  borrarLinea(id: number) {
    let index = this.lineas.findIndex(linea => linea.producto.id == id)
    this.lineas.splice(index, 1);
    this.recalcular();
  }
  clear() {
    this.lineas = [];
    this.numeroItems = 0;
    this.precioCarrito = 0;
  }
  private recalcular() {
    this.numeroItems = 0;
    this.precioCarrito = 0;
    this.lineas.forEach(l=> {
      this.numeroItems += l.cantidad;
      this.precioCarrito += l.cantidadTotal;
    })
  }
}

export class LineaCarrito{
  constructor(public producto:Producto,public cantidad:number) {
  }
  get cantidadTotal() {
    return this.cantidad * (this.producto.price ?? 0)
  }
}
