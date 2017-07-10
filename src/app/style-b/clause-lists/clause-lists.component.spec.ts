import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClauseListsComponent } from './clause-lists.component';

describe('ClauseListsComponent', () => {
  let component: ClauseListsComponent;
  let fixture: ComponentFixture<ClauseListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClauseListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClauseListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
