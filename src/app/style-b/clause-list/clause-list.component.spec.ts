import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClauseListComponent } from './clause-list.component';

describe('ClauseListComponent', () => {
  let component: ClauseListComponent;
  let fixture: ComponentFixture<ClauseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClauseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClauseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
