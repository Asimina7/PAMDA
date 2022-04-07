import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  result:any;

  constructor(private router:Router) {
    this.result = this.router.getCurrentNavigation()?.extras.state
   }

  ngOnInit(): void {
  }

}
