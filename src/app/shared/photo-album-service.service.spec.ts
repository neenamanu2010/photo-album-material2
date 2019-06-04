import { TestBed } from '@angular/core/testing';

import { PhotoAlbumServiceService } from './photo-album-service.service';

describe('PhotoAlbumServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoAlbumServiceService = TestBed.get(PhotoAlbumServiceService);
    expect(service).toBeTruthy();
  });
});
