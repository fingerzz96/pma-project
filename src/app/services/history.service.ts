import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HistoryData } from '../pages/_models/history-data';
import { Platform } from '@ionic/angular';

const HISTORY_KEY = 'my-history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: HistoryData[] = [];
  newHistory: HistoryData = {} as HistoryData;

  constructor(private storage: Storage, private plt: Platform) {}

  // Adding to storage

  addHistory(history: HistoryData): Promise<any> {
    return this.storage.get(HISTORY_KEY).then((histories: HistoryData[]) => {
      if (history) {
        // tslint:disable-next-line: no-debugger
        debugger;
        histories.push(history);
        return this.storage.set(HISTORY_KEY, histories);
      } else {
        return this.storage.set(HISTORY_KEY, [history]);
      }
    });
  }

  // Reading history
  getHistory(): Promise<HistoryData[]> {
    return this.storage.get(HISTORY_KEY);
  }

  loadItems(data: any) {
    this.getHistory().then(histories => {
      data = this.history;
      this.history = histories;
    });
  }

  readyPlatform() {
    this.plt.ready().then(() => {
      this.loadItems(history);
    });
  }
}
