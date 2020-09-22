import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { StrcturalNgforComponent } from './components/strctural-ngfor/strctural-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirComponent,
    StrcturalNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
