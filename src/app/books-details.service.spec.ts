import { TestBed } from '@angular/core/testing';

import { BooksDetailsService } from './books-details.service';

describe('BooksDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksDetailsService = TestBed.get(BooksDetailsService);
    expect(service).toBeTruthy();
  });
});
