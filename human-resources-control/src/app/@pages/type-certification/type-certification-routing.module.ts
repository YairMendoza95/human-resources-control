import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeCertificationComponent } from './components/type-certification/type-certification.component';


const routes: Routes = [
  { path: '', component: TypeCertificationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCertificationRoutingModule { }
