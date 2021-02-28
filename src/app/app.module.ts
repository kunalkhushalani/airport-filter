import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportFilterComponent } from './airport-filter/airport-filter.component';
import { SliceAirportsPipe } from './slice-airports.pipe';
import { CacheInterceptor } from './core/cache.interceptor';

@NgModule({
  declarations: [AppComponent, AirportFilterComponent, SliceAirportsPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
