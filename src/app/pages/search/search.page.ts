import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchType, SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit() {}

  searchChange() {
    this.results = this.searchService.getData(this.searchTerm, this.type);
  }

  openDetails(id: any) {
    this.router.navigateByUrl(`/tabs/search/${id}`);
  }
}
