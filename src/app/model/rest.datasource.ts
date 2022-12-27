import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from './producto.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Orden } from './orden.model';

const PROTOCOLO = 'http';
const PUERTO = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor(private http: HttpClient) {
    //this.baseUrl = `${PROTOCOLO}://${location.hostname}:${PUERTO}/`;
    this.baseUrl = "/api/";
  }
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl + 'products');
  }
  guardarOrden(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(this.baseUrl + 'orders', orden);
  }
  aunthenticate(user: string, password: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + 'login', {
        name: user,
        password: password,
      })
      .pipe(
        map((response) => {
          this.auth_token = response.success ? response.token : null;
          return response.success;
        })
      );
  }
  saveProduct(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(
      this.baseUrl + 'products',
      producto,
      this.getOptions()
    );
  }
  updateProduct(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(
      `${this.baseUrl}products/${producto.id}`,
      this.getOptions()
    );
  }
  deleteProduct(id: number): Observable<Producto> {
    return this.http.delete<Producto>(
      `${this.baseUrl}products/${id}`,
      this.getOptions()
    );
  }
  getOrders(): Observable<Orden[]> {
    return this.http.get<Orden[]>(this.baseUrl + 'orders', this.getOptions());
  }
  updateOrder(orden: Orden): Observable<Orden> {
    return this.http.put<Orden>(
      `${this.baseUrl}orders/${orden.id}`,orden,
      this.getOptions()
    );
  }
deleteOrder(id: number): Observable<Orden> {
    return this.http.delete<Orden>(
      `${this.baseUrl}orders/${id}`,
      this.getOptions()
    );
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
