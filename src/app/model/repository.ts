import { Producto } from "./model";
import { StaticDataSource } from "./datasource";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductoRepositorio{
  private productos: Producto[]=[];
  private categorias:string[]=[];

  constructor(private datasource: StaticDataSource) {
    datasource.getProductos().subscribe(data => {
      this.productos = data;
      this.categorias = data.map(p => p.categoria ?? "(Vacia)")
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getProductos(categoria?: string): Producto[]{
    return this.productos.filter(p => categoria == undefined || categoria == p.categoria);
  }
  getProducto(id: number): Producto | undefined{
    return this.productos.find(p => p.id == id);
  }
  getCategorias(): string[]{
    return this.categorias;
  }
}
