import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentHistoryComponent } from './consent-history.component';

describe('ConsentHistoryComponent', () => {
  let component: ConsentHistoryComponent;
  let fixture: ComponentFixture<ConsentHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
