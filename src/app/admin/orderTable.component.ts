import {
  Component,
  IterableDiffer,
  IterableDiffers,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Orden } from '../model/orden.model';
import { OrdenRepositorio } from '../model/orden.repository';
@Component({
  templateUrl: 'orderTable.component.html',
})
export class OrderTableComponent {
  colsAndRows: string[] = ['name', 'zip', 'cart_p', 'cart_q', 'buttons'];
  dataSource = new MatTableDataSource<Orden>(this.repository.getOrdenes());
  differ: IterableDiffer<Orden>;
  constructor(private repository: OrdenRepositorio, differs: IterableDiffers) {
    this.differ = differs.find(this.repository.getOrdenes()).create();
    this.dataSource.filter = 'true';
    this.dataSource.filterPredicate = (order, include) => {
      return !order.shipped || include.toString() == 'true';
    };
  }
  get includeShipped(): boolean {
    return this.dataSource.filter == 'true';
  }
  set includeShipped(include: boolean) {
    this.dataSource.filter = include.toString();
  }
  toggleShipped(order: Orden) {
    order.shipped = !order.shipped;
    this.repository.updateOrden(order);
  }
  delete(id: number) {
    this.repository.deleteOrder(id);
  }
  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.getOrdenes());
    if (changes != null) {
      this.dataSource.data = this.repository.getOrdenes();
    }
  }
}
