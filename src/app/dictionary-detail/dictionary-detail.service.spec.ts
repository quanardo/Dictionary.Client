import { TestBed, inject } from '@angular/core/testing';

import { DictionaryDetailService } from './dictionary-detail.service';

describe('DictionaryDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryDetailService]
    });
  });

  it('should be created', inject([DictionaryDetailService], (service: DictionaryDetailService) => {
    expect(service).toBeTruthy();
  }));
});
