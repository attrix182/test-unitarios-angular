import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubProfileService } from './github-profile.service';
import { HttpClient } from '@angular/common/http';

describe('GithubProfileService', () => {
  let service: GithubProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [GithubProfileService, HttpClientTestingModule, HttpClient]
    });
    service = TestBed.inject(GithubProfileService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
