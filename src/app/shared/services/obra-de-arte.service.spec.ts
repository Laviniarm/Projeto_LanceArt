import { TestBed } from '@angular/core/testing';

import { ObraDeArteService } from './obra-de-arte.service';

describe('ObraDeArteService', () => {
  let service: ObraDeArteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObraDeArteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
