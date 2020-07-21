import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageproyComponent } from './imageproy.component';

describe('ImageproyComponent', () => {
  let component: ImageproyComponent;
  let fixture: ComponentFixture<ImageproyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageproyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageproyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
