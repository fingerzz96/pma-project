import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';
import { HistoryData } from '../_models/history-data';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  outputID: string;

  history: HistoryData[] = [];
  newHistory: HistoryData = {} as HistoryData;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private historyService: HistoryService
  ) {}

  ngOnInit() {}

  searchChange() {
    this.results = this.searchService.getData(this.searchTerm, this.type);
  }

  openDetails(id: any, title: string, year: number) {
    this.router.navigateByUrl(`/tabs/search/${id}`);
    this.addHistory(title, year, id);
  }

  addHistory(title: string, year: number, id: string) {
    this.newHistory.Title = title;
    this.newHistory.Year = year;
    this.newHistory.imdbID = id;

    this.historyService.addHistory(this.newHistory).then(item => {
      this.newHistory = {} as HistoryData;
      this.historyService.loadItems();
    });
  }
}
