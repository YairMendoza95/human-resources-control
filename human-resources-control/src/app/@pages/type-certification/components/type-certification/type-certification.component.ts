import { Component, OnInit } from '@angular/core';
import { TypeCertificationService } from '../../service/type-certification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-certification',
  templateUrl: './type-certification.component.html',
  styleUrls: ['./type-certification.component.css']
})
export class TypeCertificationComponent implements OnInit {
  types: any;
  type = {
    type_name: '',
    type_description: ''
  };

  currentType = {
    type_name: '',
    type_description: ''
  };

  tc: any;
  constructor(
    private typeCertificationService: TypeCertificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveTypes();
  }

  retrieveTypes() {
    this.typeCertificationService.getAll().subscribe(data => {
      this.types = data;
    }, err => {
      console.log(err);
    });
  }

  addType() {
    const data = {
      type_name: this.type.type_name,
      type_description: this.type.type_description
    };

    this.typeCertificationService.add(data).subscribe(res => {
      window.location.reload();
    });
  }

  getType(id) {
    this.typeCertificationService.getById(id).subscribe(data => {
      this.tc = data;
      console.log(this.currentType);
    }, err => {
      console.log(err);
    });

    this.currentType.type_name = this.tc.type_name;
    this.currentType.type_description = this.tc.type_description;
  }

  updateType(id) {
    this.typeCertificationService.edit(id, this.currentType).subscribe(res => {
      window.location.reload();
    });
  }
}
