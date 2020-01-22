import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.page.html',
  styleUrls: ['./search-info.page.scss']
})
export class SearchInfoPage implements OnInit {
  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.searchDetail();
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

  searchDetail() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.searchService.getDetails(id).subscribe(result => {
      console.log('details: ', result);
      this.information = result;
    });
  }
}
