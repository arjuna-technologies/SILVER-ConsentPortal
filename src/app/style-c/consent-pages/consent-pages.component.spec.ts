import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPagesComponent } from './consent-pages.component';

describe('ConsentPagesComponent', () => {
  let component: ConsentPagesComponent;
  let fixture: ComponentFixture<ConsentPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
