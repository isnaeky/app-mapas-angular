import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapsComponent } from './components/maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './components/maps/map-edit/map-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, MapsComponent, MapEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClm5FLIrINHhBoJv7HVZUBvSL-8k56Fes',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
