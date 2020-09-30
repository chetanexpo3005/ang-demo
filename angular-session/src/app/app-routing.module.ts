import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrcturalNgforComponent } from './components/strctural-ngfor/strctural-ngfor.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  {
    path: 'ngfor',
    component: StrcturalNgforComponent,
    data : { id: '1', name: 'for'}
  },
  {
    path: 'ngif',
    component: StructuralDirComponent,
    data : { id: '2', name: 'if'}
  },
  {
    path: 'ngclass',
    component: NgClassComponent
  },
  {
    path: 'ngstyle',
    component: NgStyleComponent
  } ,
  {
    path: 'httpClient',
    component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
