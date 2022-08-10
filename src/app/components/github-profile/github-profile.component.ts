import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GithubProfile } from './github-profile.model';
import { GithubProfileService } from './github-profile.service';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnChanges {

  profile: GithubProfile;
  @Input() username: string;


  constructor(public githubService: GithubProfileService) {}


  ngOnChanges(): void {
    this.getProfileInfo(this.username);
  }

  getProfileInfo(username:string) {
    this.githubService.getProfile(username).subscribe((data:any) => {
      this.profile = data
      console.log(this.profile);
    });
  }
}
