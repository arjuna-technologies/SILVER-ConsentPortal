import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentRendererUploadComponent } from './consent-renderer-upload.component';

describe('ConsentRendererUploadComponent', () => {
  let component: ConsentRendererUploadComponent;
  let fixture: ComponentFixture<ConsentRendererUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentRendererUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentRendererUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
