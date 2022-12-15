import { NgModule } from "@angular/core";
import { ProductoRepositorio } from "./repository";
import { StaticDataSource } from "./datasource";
import { Carrito } from "./carrito.model";
import { Orden } from "./orden.model";
import { OrdenRepositorio } from "./orden.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductoRepositorio, StaticDataSource, Carrito, Orden, OrdenRepositorio, {
    provide:StaticDataSource,useClass:RestDataSource
  }]
})
export class ModelModule{}
