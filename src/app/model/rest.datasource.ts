import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Producto } from "./model";
import { HttpClient } from '@angular/common/http';
import { Orden } from "./orden.model";

const PROTOCOLO = "http";
const PUERTO = 3500;

@Injectable()
export class RestDataSource{
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOLO}://${location.hostname}:${PUERTO}/`;
    }
    getProductos():Observable<Producto[]>{
        return this.http.get<Producto[]>(this.baseUrl + "products")
    }
    guardarOrden(): Observable<Orden>{
        return this.http.post<Orden>(this.baseUrl + "orders",Orden);
    }
}

