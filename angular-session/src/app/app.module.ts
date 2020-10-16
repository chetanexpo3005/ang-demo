import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { InlineEditingComponent } from './components/inline-editing/inline-editing.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { PrimeTableComponent } from './components/prime-table/prime-table.component';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
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
    NaPipe,
    InlineEditingComponent,
    TypescriptComponent,
    PrimeTableComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
