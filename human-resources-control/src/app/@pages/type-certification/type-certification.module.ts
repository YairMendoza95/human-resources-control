import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeCertificationRoutingModule } from './type-certification-routing.module';
import { TypeCertificationComponent } from './components/type-certification/type-certification.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TypeCertificationComponent],
  imports: [
    CommonModule,
    TypeCertificationRoutingModule,
    FormsModule
  ]
})
export class TypeCertificationModule { }
