import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { AddCertComponent } from './components/add-cert/add-cert.component';
import { ListCertComponent } from './components/list-cert/list-cert.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCertComponent, ListCertComponent],
  imports: [
    CommonModule,
    CertificationsRoutingModule,
    MatSelectCountryModule,
    FormsModule
  ]
})
export class CertificationsModule { }
