import { TestBed, inject } from '@angular/core/testing';

import { PurposesLoaderService } from './purposes-loader.service';

describe('PurposesLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurposesLoaderService]
    });
  });

  it('should be created', inject([PurposesLoaderService], (service: PurposesLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
