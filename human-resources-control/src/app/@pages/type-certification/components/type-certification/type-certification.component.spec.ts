import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCertificationComponent } from './type-certification.component';

describe('TypeCertificationComponent', () => {
  let component: TypeCertificationComponent;
  let fixture: ComponentFixture<TypeCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
