import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HistoryData } from '../pages/_models/history-data';
import { Platform } from '@ionic/angular';

const HISTORY_KEY = 'my-history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  historyData: HistoryData[] = [];
  newHistory: HistoryData = {} as HistoryData;

  constructor(private storage: Storage, private plt: Platform) {}

  // Adding to storage

  addHistory(history: HistoryData): Promise<any> {
    return this.storage.get(HISTORY_KEY).then((histories: HistoryData[]) => {
      histories = this.historyData;
      if (history) {
        // tslint:disable-next-line: no-debugger
        // TODO: Fixing the error of histories returning null
        console.log(histories);
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

  loadItems() {
    this.getHistory().then(histories => {
      this.historyData = histories;
    });
  }

  readyPlatform() {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
}
