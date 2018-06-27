import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { PredictionComponent } from './prediction/prediction.component';
import { BeaconComponent } from './beacon/beacon.component';
import { InicioComponent } from './inicio/inicio.component';
import { ImageComponent } from './image/image.component';
import { StatusComponent } from './status/status.component';
import { HistorialComponent } from './historial/historial.component';



const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'images', component: ImageComponent},
  { path: 'products', component: ProductComponent},
  { path: 'users', component: UserComponent},
  { path: 'categories', component: CategoryComponent},
  { path: 'predictions', component: PredictionComponent},
  { path: 'beacons', component: BeaconComponent},
  { path: 'status', component: StatusComponent},
  { path: 'historial', component: HistorialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }