import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { Login } from './sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {

  
  login = new Login();
  message:any;
  games:any;
  get:boolean = false;

  constructor(private services:GamesService, private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
     
    this.services.postData(this.login).subscribe({

      next: data => this.games = data,

      error: err => this.message = err,

      complete: () => this.message = "Login successful"
            
    });
    console.log(this.message)
    console.log(this.login)
    // if(this.games !=null && this.router.navigate(['/home_page'])){
    //   alert(this.message)
    // }

    if((this.message ==undefined || this.message !=null) && this.router.navigate(['/home_page'])){
      alert("Login successfull")
    }


   
     
  }
}
