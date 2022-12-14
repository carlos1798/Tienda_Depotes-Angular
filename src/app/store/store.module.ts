import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/module";
import { StoreComponent } from "./store.componets";
import { CarritoSumarioComponent } from "./sumarioCarrito.component";
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent,CarritoSumarioComponent],
  exports: [StoreComponent]
})
export class StoreModule{};
