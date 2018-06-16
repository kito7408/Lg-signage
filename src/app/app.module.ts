import { UserService } from './user.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { BeaconService } from './beacon.service';
import { PredictionService } from './prediction.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { InicioComponent } from './inicio/inicio.component';
import { PredictionComponent } from './prediction/prediction.component';
import { BeaconComponent } from './beacon/beacon.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UserComponent,
    CategoryComponent,
    InicioComponent,
    PredictionComponent,
    BeaconComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [UserService,ProductService,CategoryService,BeaconService,PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
