import { TestBed, inject } from '@angular/core/testing';

import { DetailsLoaderService } from './details-loader.service';

describe('DetailsLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsLoaderService]
    });
  });

  it('should be created', inject([DetailsLoaderService], (service: DetailsLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
