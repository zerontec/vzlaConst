import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServKitchenComponent } from './serv-kitchen.component';

describe('ServKitchenComponent', () => {
  let component: ServKitchenComponent;
  let fixture: ComponentFixture<ServKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
