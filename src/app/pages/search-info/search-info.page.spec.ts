import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchInfoPage } from './search-info.page';

describe('SearchInfoPage', () => {
  let component: SearchInfoPage;
  let fixture: ComponentFixture<SearchInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
