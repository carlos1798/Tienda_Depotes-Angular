import { Injectable} from "@angular/core";
import { Observable, } from "rxjs";
import { Orden } from "./orden.model";
import { StaticDataSource } from "./datasource";

@Injectable()
export class OrdenRepositorio{
    private ordenes:Orden[] = [];

    constructor(private dataSource:StaticDataSource){}
    getOrdenes():Orden[]{
        return this.ordenes;
    }
    guardarOrden(orden:Orden):Observable<Orden>{
        return this.dataSource.guardarOrden(orden);

    }
} 
