import { TestBed, inject } from '@angular/core/testing';

import { ConsentContextDefLoaderService } from './consent-context-def-loader.service';

describe('ConsentContextDefLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentContextDefLoaderService]
    });
  });

  it('should be created', inject([ConsentContextDefLoaderService], (service: ConsentContextDefLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
