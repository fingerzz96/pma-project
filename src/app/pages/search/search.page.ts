import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  searchChange() {
    this.results = this.searchService.getData(this.searchTerm, this.type);
  }
}
