import { TestBed } from '@angular/core/testing';

import { AparatoService } from './aparato.service';

describe('AparatoService', () => {
  let service: AparatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AparatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
