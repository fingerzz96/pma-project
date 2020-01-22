import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchInfoPage } from './search-info.page';

const routes: Routes = [
  {
    path: '',
    component: SearchInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchInfoPageRoutingModule {}
