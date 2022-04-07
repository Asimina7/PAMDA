import { Component, OnInit } from '@angular/core';
import { GamesService } from './../services/games.service';

@Component({
  selector: 'app-our-games',
  templateUrl: './our-games.component.html',
  styleUrls: ['./our-games.component.scss']
})
export class OurGamesComponent implements OnInit {

  constructor(private service: GamesService) { }

  response: any;
  message: string = '';
  categoryName: string = 'strategy';
  results_our_games = this.range(0, 6)
  range(start: number, end: number) {
    return Array(end - start + 1).fill(1).map((_, idx) => start + idx)
  }

  ngOnInit(): void {
    this.requestData(this.categoryName);
  }
  requestData(category: any) {
    this.categoryName = category;
    this.service.getData(category).subscribe({
      next: data => this.response = data,
      error: err => this.message = err,
      complete: () => this.message = "Request completed...."
    });

  }
}