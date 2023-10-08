import { TestBed } from '@angular/core/testing';

import { TmdbLinkService } from './tmdb-link.service';

describe('TmdbService', () => {
  let service: TmdbLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
