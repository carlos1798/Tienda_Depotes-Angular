import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.componets";
import { CarritoSumarioComponent } from "./sumarioCarrito.component";
import { detallesCarritoComponent } from "./detallesCarrito.component";
import { pasarCajaComponent } from "./pasarCaja.component";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule,RouterModule],
  declarations: [StoreComponent,CarritoSumarioComponent,detallesCarritoComponent, pasarCajaComponent],
  exports: [StoreComponent,detallesCarritoComponent,pasarCajaComponent]
})
export class StoreModule{};
