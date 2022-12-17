import { Injectable} from "@angular/core";
import { Observable, } from "rxjs";
import { Orden } from "./orden.model";
import { RestDataSource } from "./rest.datasource";
@Injectable()
export class OrdenRepositorio{
    private ordenes:Orden[] = [];
    private loaded: boolean = false;

    constructor(private dataSource:RestDataSource){}

    loadOrders() {
        this.loaded = true
        this.dataSource.getOrders().subscribe(ordenes =>this.ordenes=this.ordenes)
    }
    getOrdenes(): Orden[]{
        if (!this.loaded) {
         this.loadOrders();
        }
        return this.ordenes
    }
    guardarOrden(orden:Orden):Observable<Orden>{
        this.loaded = false;
        return this.dataSource.guardarOrden(orden);

    }
    updateOrden(orden: Orden) {
        this.dataSource.updateOrder(orden).subscribe(orden => {
            this.ordenes.splice(this.ordenes.findIndex(
                o => o.id == orden.id), 1, orden);
        });
    }
    deleteOrder(id: number) {
        this.dataSource.deleteOrder(id).subscribe(orden => {
            this.ordenes.splice(this.ordenes.findIndex(o => id == o.id), 1)
        });
    }


}
