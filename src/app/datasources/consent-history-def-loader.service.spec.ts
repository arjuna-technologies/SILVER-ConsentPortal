import { TestBed, inject } from '@angular/core/testing';

import { ConsentHistoryDefLoaderService } from './consent-history-def-loader.service';

describe('ConsentHistoryDefLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsentHistoryDefLoaderService]
    });
  });

  it('should be created', inject([ConsentHistoryDefLoaderService], (service: ConsentHistoryDefLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
