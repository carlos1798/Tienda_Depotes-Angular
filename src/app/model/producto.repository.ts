import { Producto } from "./producto.model";
import { StaticDataSource } from "./static.datasource";
import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";


@Injectable()
export class ProductoRepositorio {
  private productos: Producto[] = [];
  private categorias: string[] = [];

  constructor(private datasource: RestDataSource) {
    datasource.getProductos().subscribe(data => {
      this.productos = data;
      this.categorias = data.map(p => p.category ?? "(Vacia)")
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProductos(categoria?: string): Producto[] {
    return this.productos.filter(p => categoria == undefined || categoria == p.category);
  }
  getProducto(id: number): Producto | undefined {
    return this.productos.find(p => p.id == id);
  }
  getCategorias(): string[] {
    return this.categorias;
  }
  saveProduct(producto: Producto) {
    if (producto.id == null || producto.id == 0) {
      this.datasource.saveProduct(producto).subscribe(p => this.productos.push(p))
    } else {
      this.datasource.updateProduct(producto).subscribe(
        p => this.productos.splice(this.productos.findIndex(p => p.id == producto.id), 1, producto));
    }
  }

  deleteProduct(id: number) {
    this.datasource.deleteProduct(id).subscribe(p => {
      this.productos.splice(this.productos.findIndex(p =>
        p.id == id), 1);
    });
    }











}
