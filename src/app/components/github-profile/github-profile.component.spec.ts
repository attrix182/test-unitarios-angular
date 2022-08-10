import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileComponent } from './github-profile.component';
import { GithubProfileService } from './github-profile.service';

describe('GithubProfileComponent', () => {
  let component: GithubProfileComponent;
  let fixture: ComponentFixture<GithubProfileComponent>;
  let http: HttpClient;
  let githubProfile: GithubProfileService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GithubProfileComponent],
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GithubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ver un numero mayor a 0 en seguidores', () => {
    component.username = 'attrix182';
    component.getProfileInfo('attrix182');
    console.log(component.profile);
    expect(component.profile.followers).toBeGreaterThan(0);
  });
});
