import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { RouterModule} from '@angular/router';
// for consuming API
import { HttpClientModule } from '@angular/common/http';

import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { StrcturalNgforComponent } from './components/strctural-ngfor/strctural-ngfor.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CompanyComponent } from './components/company/company.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { StartCapitalPipe } from './pipes/capitalFirst/start-capital.pipe';
import { NaPipe } from './pipes/na/na.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirComponent,
    StrcturalNgforComponent,
    NgClassComponent,
    NgStyleComponent,
    CompanyComponent,
    PipeComponent,
    StartCapitalPipe,
    NaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
