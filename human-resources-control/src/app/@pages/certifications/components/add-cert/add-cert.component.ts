import { Component, OnInit } from '@angular/core';
import { TypeCertificationService } from '../../../type-certification/service/type-certification.service';
import { CertificationService } from '../../service/certification.service';
import { Router } from '@angular/router';
import { utils } from '../../../../tools/utils';


@Component({
  selector: 'app-add-cert',
  templateUrl: './add-cert.component.html',
  styleUrls: ['./add-cert.component.css']
})
export class AddCertComponent implements OnInit {
  types: any;
  countries: string[];
  certification = {
    certification_name: '',
    idtype_certification: 0,
    certification_country: '',
    certification_version: '',
    certification_description: ''
  };

  constructor(
    private typeCertificationService: TypeCertificationService,
    private certificationService: CertificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.countries = utils.countries;
    this.getTypes();
  }

  getTypes() {
    this.typeCertificationService.getAll().subscribe(data => {
      this.types = data;
    }, err => {
      console.error(err);
    });
  }

  addCertification() {
    const data = {
      certification_name: this.certification.certification_name,
      idtype_certification: this.certification.idtype_certification,
      certification_country: this.certification.certification_country,
      certification_version: this.certification.certification_version,
      certification_description: this.certification.certification_description
    };

    this.certificationService.create(data).subscribe(res => {
      this.router.navigate(['certification']);
    });
  }
}
