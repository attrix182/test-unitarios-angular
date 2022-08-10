import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubProfile } from './github-profile.model';

@Injectable({
  providedIn: 'root'
})
export class GithubProfileService {

  constructor(private http:HttpClient) { }

  getProfile(username:string) {
    if(username){
    return this.http.get(`https://api.github.com/users/${username}`);
    }
    return this.http.get(`https://api.github.com/users/attrix182`);
  }

}
