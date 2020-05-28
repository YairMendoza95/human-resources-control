import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertComponent } from './add-cert.component';

describe('AddCertComponent', () => {
  let component: AddCertComponent;
  let fixture: ComponentFixture<AddCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
