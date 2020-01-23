import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { Platform, IonList } from '@ionic/angular';
import { HistoryData } from '../_models/history-data';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss']
})
export class HistoryPage implements OnInit {
  history: HistoryData[] = [];


  @ViewChild('mylist', { static: false }) mylist: IonList;

  constructor(private historyService: HistoryService) {
    this.historyService.readyPlatform();
  }

  ngOnInit() {}

}
