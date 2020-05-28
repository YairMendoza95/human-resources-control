import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCertComponent } from './components/list-cert/list-cert.component';
import { AddCertComponent } from './components/add-cert/add-cert.component';


const routes: Routes = [
  { path: '', component: ListCertComponent },
  { path: 'add', component: AddCertComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificationsRoutingModule { }
