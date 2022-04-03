import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  constructor(private services:GamesService) { }

  ngOnInit(): void {
  }

  onSubmit(){
     
    this.services.postData(this.login).subscribe({

      next: data => this.games = data,

      error: err => this.message = err,

      complete: () => this.message = "Login successful"
      

    });
    console.log(this.message)
    if(this.games !=null){
      alert(this.message)
    }
   
     
  }
}
