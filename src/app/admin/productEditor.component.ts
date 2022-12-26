import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Producto } from "../model/producto.model";
import { ProductoRepositorio } from "../model/producto.repository";

@Component({
   templateUrl:"productEditor.component.html"
})
export class ProductEditorComponent{
  editing: boolean=false;
  product: Producto = new Producto();

  constructor(private repositorio: ProductoRepositorio, private router: Router,activeRoute:ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product, repositorio.getProducto(activeRoute.snapshot.params["id"]));
    }
  }
  save() {
    this.repositorio.saveProduct(this.product)
    this.router.navigateByUrl("/admin/main/products")
  }
}
