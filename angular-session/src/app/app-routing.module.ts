import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrcturalNgforComponent } from './components/strctural-ngfor/strctural-ngfor.component';
import { StructuralDirComponent } from './components/structural-dir/structural-dir.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
