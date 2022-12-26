import { Component,IterableDiffer,IterableDiffers,ViewChild} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Producto } from "../model/producto.model";
import { ProductoRepositorio } from "../model/producto.repository";
import { MatPaginator } from "@angular/material/paginator";

@Component({
    templateUrl:"productTable.component.html"
})
export class ProductTableComponent{
  constructor(private repositorio: ProductoRepositorio, differs: IterableDiffers) {
    this.differ = differs.find(this.repositorio.getProductos()).create();

  }
  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
  dataSource = new MatTableDataSource<Producto>(this.repositorio.getProductos())
  differ:IterableDiffer<Producto>
  ngDoCheck() {
    let changes = this.differ?.diff(this.repositorio.getProductos());
    if (changes != null) {
      this.dataSource.data = this.repositorio.getProductos();
    }
  }
  deleteProduct(id: number) {
    this.repositorio.deleteProduct(id);
  }
  @ViewChild(MatPaginator)
  paginator?:MatPaginator
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator
    }
  }



}
