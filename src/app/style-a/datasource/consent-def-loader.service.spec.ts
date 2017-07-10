import { TestBed, inject } from '@angular/core/testing';

import { ConsentDefLoaderService } from './consent-def-loader.service';

describe('ConsentDefLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentDefLoaderService]
    });
  });

  it('should be created', inject([ConsentDefLoaderService], (service: ConsentDefLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
