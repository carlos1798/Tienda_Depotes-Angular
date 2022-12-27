import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.componets';
import { detallesCarritoComponent } from './store//detallesCarrito.component';
import { pasarCajaComponent } from './store//pasarCaja.component';
import { tiendaPrimeroGuard } from './tiendaPrimero.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'tienda',
        component: StoreComponent,
        canActivate: [tiendaPrimeroGuard],
      },
      {
        path: 'carrito',
        component: detallesCarritoComponent,
        canActivate: [tiendaPrimeroGuard],
      },
      {
        path:"admin",
        loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule),
        canActivate:[tiendaPrimeroGuard]
      },
      {
        path: 'checkout',
        component: pasarCajaComponent,
        canActivate: [tiendaPrimeroGuard],
      },
      { path: '**', redirectTo: '/tienda' },
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [tiendaPrimeroGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
