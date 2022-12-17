import { Component } from "@angular/core";
import { Producto } from "../model/producto.model";
import { ProductoRepositorio } from "../model/producto.repository";
import { Carrito } from "../model/carrito.model";
import { Router } from "@angular/router";

@Component({
  selector: "store",
  templateUrl :"store.component.html"
})
export class StoreComponent{
  categoriaSeleccionada: string | undefined;
  productosPorPg = 4;
  paginaSeleccionada = 1;
  constructor(private repositorio: ProductoRepositorio, private carrito: Carrito,private router:Router) {}
  get productos(): Producto[]{
    let indicePagina = (this.paginaSeleccionada -1) * this.productosPorPg
    return this.repositorio.getProductos(this.categoriaSeleccionada).slice(indicePagina, indicePagina + this.productosPorPg);
  }
  get categorias(): string[]{
    return this.repositorio.getCategorias();
  }
  cambiarCategoria(categoriaNueva?: string) {
    this.categoriaSeleccionada = categoriaNueva;
  }

  cambiarPagina(nuevaPagina: number) {
    this.paginaSeleccionada = nuevaPagina;
  }

  cambiarPaginaTamano(nuevoTamano: number) {
    this.productosPorPg = Number(nuevoTamano);
    this.cambiarPagina(1);
  }
  get numeroPaginas(): number[]{
    return Array(Math.ceil(this.repositorio
      .getProductos(this.categoriaSeleccionada).length / this.productosPorPg))
      .fill(0).map((x, i) => i +1);
  }
  addProductoCarrito(producto: Producto) {
    this.carrito.addLinea(producto);
    this.router.navigateByUrl("/carrito");
  }
}
