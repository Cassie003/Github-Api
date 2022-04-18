import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private clienttoken: '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';


  constructor(private httpClient: HttpClient) {
  
    this.username = "Cassie003";

  }
  getPersonalInfo() {
    return this.httpClient.get('https://api.github.com/users/'+this.username + "?client_token=" + this.clienttoken)
    .pipe(map((res: any) => {
      return res
    }));
}

getRepos(){
  return this.httpClient.get('https://api.github.com/users/'+this.username + "/repos?client_token=" + this.clienttoken)
  .pipe(map((res: any) => {
    return res
}));
}

findUserName(name: string){
  this.username=name
}




  



}
