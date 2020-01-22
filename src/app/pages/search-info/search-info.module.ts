import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchInfoPageRoutingModule } from './search-info-routing.module';

import { SearchInfoPage } from './search-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchInfoPageRoutingModule
  ],
  declarations: [SearchInfoPage]
})
export class SearchInfoPageModule {}
