import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServPreviewComponent } from './serv-preview.component';

describe('ServPreviewComponent', () => {
  let component: ServPreviewComponent;
  let fixture: ComponentFixture<ServPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
