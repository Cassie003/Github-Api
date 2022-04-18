import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  personal: any;
  repos: any;
  user: string | undefined;


  constructor(private githubservice: GithubService) {
    


    
  }




  

  ngOnInit(): void {
    this.user="Cassie003"
    this.githubservice.findUserName(this.user)
    this.githubservice.getPersonalInfo().subscribe((personal: any) => {
      console.log(personal);
      this.personal = personal;
    });


    this.githubservice.getRepos().subscribe((repos: any) => {
      console.log(repos);
      this.repos=repos;
    });


  }

}
