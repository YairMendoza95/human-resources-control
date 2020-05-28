import { Component, OnInit } from '@angular/core';
import { CertificationService } from '../../service/certification.service';
import { Router } from '@angular/router';
import { TypeCertificationService } from '../../../type-certification/service/type-certification.service';
import { utils } from '../../../../tools/utils';


@Component({
  selector: 'app-list-cert',
  templateUrl: './list-cert.component.html',
  styleUrls: ['./list-cert.component.css']
})
export class ListCertComponent implements OnInit {
  certifications: any;
  countries: string[];
  types: any;
  certification = {
    certification_name: '',
    idtype_certification: 0,
    certification_country: '',
    certification_version: '',
    certification_description: ''
  };

  constructor(
    private certificationService: CertificationService,
    private router: Router,
    private typeCertificationService: TypeCertificationService) { }

  ngOnInit(): void {
    this.retrieveCetifications();
    this.getTypes();
    this.countries = utils.countries;
  }

  retrieveCetifications() {
    this.certificationService.getAll().subscribe(data => {
      this.certifications = data;
    }, err => {
      console.log(err);
    });
  }

  getTypes() {
    this.typeCertificationService.getAll().subscribe(data => {
      this.types = data;
    }, err => {
      console.log(err);
    });
  }

  updateCertification(id) {
    const data = {

    }
    this.certificationService.edit(id, this.certification).subscribe(res => {
      window.location.reload();
    });
  }
}
