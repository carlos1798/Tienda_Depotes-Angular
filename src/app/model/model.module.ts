import { NgModule } from "@angular/core";
import { ProductoRepositorio } from "./producto.repository";
import { StaticDataSource } from "./static.datasource";
import { Carrito } from "./carrito.model";
import { Orden } from "./orden.model";
import { OrdenRepositorio } from "./orden.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { ConnectionService } from "./connection.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [ProductoRepositorio, StaticDataSource, Carrito, Orden, OrdenRepositorio, {
    provide:StaticDataSource,useClass:RestDataSource
  }, RestDataSource,AuthService,ConnectionService]
})
export class ModelModule{}
