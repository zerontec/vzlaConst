import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServBasamentComponent } from './serv-basament.component';

describe('ServBasamentComponent', () => {
  let component: ServBasamentComponent;
  let fixture: ComponentFixture<ServBasamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServBasamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServBasamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
