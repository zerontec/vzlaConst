import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCarpComponent } from './serv-carp.component';

describe('ServCarpComponent', () => {
  let component: ServCarpComponent;
  let fixture: ComponentFixture<ServCarpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServCarpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServCarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
