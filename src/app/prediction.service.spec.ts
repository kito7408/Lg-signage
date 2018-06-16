import { TestBed, inject } from '@angular/core/testing';

import { PredictionService } from './prediction.service';

describe('PredictionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredictionService]
    });
  });

  it('should be created', inject([PredictionService], (service: PredictionService) => {
    expect(service).toBeTruthy();
  }));
});
