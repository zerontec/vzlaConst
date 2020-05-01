import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServRemodelingComponent } from './serv-remodeling.component';

describe('ServRemodelingComponent', () => {
  let component: ServRemodelingComponent;
  let fixture: ComponentFixture<ServRemodelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServRemodelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServRemodelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
