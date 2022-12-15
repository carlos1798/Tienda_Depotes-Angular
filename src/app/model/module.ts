import { NgModule } from "@angular/core";
import { ProductoRepositorio } from "./repository";
import { StaticDataSource } from "./datasource";
import { Carrito } from "./carrito.model";
import { Orden } from "./orden.model";
import { OrdenRepositorio } from "./orden.repository";

@NgModule({
  providers:[ProductoRepositorio,StaticDataSource,Carrito, Orden,OrdenRepositorio]
})
export class ModelModule{}
