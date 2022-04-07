import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.scss']
})
export class CategoriesSidebarComponent implements OnInit {

  constructor(private service: GamesService) { }
  response: any;
  results_our_games = this.range(0, 39)
  range(start: number, end: number) {
    return Array(end - start + 1).fill(1).map((_, idx) => start + idx)
  }
  requestData(category: string) {

    this.service.getData(category).subscribe({
      next: data => this.response = data
      // error: err => this.message = err,
      // complete: () => this.message = "Request completed...."
    });
  }

  ngOnInit(): void {
    this.service.getAllGames().subscribe({
      next: data => this.response = data
    });
  }

}
