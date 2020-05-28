import { TestBed } from '@angular/core/testing';

import { TypeCertificationService } from './type-certification.service';

describe('TypeCertificationService', () => {
  let service: TypeCertificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeCertificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
