import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  games: any;
  response: any;
  response1: any;
  message: string = '';
  ordering: any;

  result = this.range(0, 4)
  range(start: number, end: number) {
    return Array(end - start + 1).fill(1).map((_, idx) => start + idx)
  }


  constructor(private service: GamesService) { }
  ngOnInit(): void {
    this.requestData('rating')

  }

  requestData(ordering: any) {
    this.ordering = this.ordering;
    this.service.getDataFiltered(ordering).subscribe({
      next: data => this.response = data,
      error: err => this.message = err,
      // complete: () => this.message = "Request completed...."
    });
  }
}
