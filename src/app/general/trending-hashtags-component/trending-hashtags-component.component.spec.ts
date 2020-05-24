import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHashtagsComponentComponent } from './trending-hashtags-component.component';

describe('TrendingHashtagsComponentComponent', () => {
  let component: TrendingHashtagsComponentComponent;
  let fixture: ComponentFixture<TrendingHashtagsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingHashtagsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingHashtagsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
