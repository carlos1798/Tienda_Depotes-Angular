import { Injectable } from '@angular/core';
import { Producto } from './producto.model';
import { Observable, from } from 'rxjs';
import { Orden } from './orden.model';
@Injectable()
export class StaticDataSource {
  private products: Producto[] = [
    new Producto(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Producto(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
    new Producto(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
    new Producto(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 100),
    new Producto(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
    new Producto(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 100),
    new Producto(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
    new Producto(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 100),
    new Producto(9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100),
    new Producto(
      10,
      'Product 10',
      'Category 2',
      'Product 10 (Category 2)',
      100
    ),
    new Producto(
      11,
      'Product 11',
      'Category 3',
      'Product 11 (Category 3)',
      100
    ),
    new Producto(
      12,
      'Product 12',
      'Category 3',
      'Product 12 (Category 3)',
      100
    ),
    new Producto(
      13,
      'Product 13',
      'Category 3',
      'Product 13 (Category 3)',
      100
    ),
    new Producto(
      14,
      'Product 14',
      'Category 3',
      'Product 14 (Category 3)',
      100
    ),
    new Producto(
      15,
      'Product 15',
      'Category 3',
      'Product 15 (Category 3)',
      100
    ),
  ];
  getProductos(): Observable<Producto[]> {
    return from([this.products]);
}

  guardarOrden(orden:Orden):Observable<Orden>{
    console.log(JSON.stringify(orden));
    return from([orden]);

  }
}
