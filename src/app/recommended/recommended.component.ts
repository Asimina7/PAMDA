import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  games:any;
  response: any;
  response1: any;
  message: string = '';
  ordering: any;

  result = this.range(0,4)
  range(start: number, end: number) {
    return Array(end - start + 1).fill(1).map((_, idx) => start + idx)
  }


  constructor(private service: GamesService) { }
  ngOnInit(): void {
    this.requestData('created')
    
  }

  requestData(ordering:any){ //DILONETAI EDO KAI STELNETAI STHN GETDATA
    this.ordering=this.ordering; //Patontas to koympi kai allazontas katigoria allazei kai o titlos dinamika
    this.service.getDataFiltered(ordering).subscribe({
    next: data => this.response = data, 
    error: err => this.message = err,
    // complete: () => this.message = "Request completed...."
  });
}
}
