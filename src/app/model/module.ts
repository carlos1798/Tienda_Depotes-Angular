import { NgModule } from "@angular/core";
import { ProductoRepositorio } from "./repository";
import { StaticDataSource } from "./datasource";
import { Carrito } from "./carrito.model";

@NgModule({
  providers:[ProductoRepositorio,StaticDataSource,Carrito]
})
export class ModelModule{}
