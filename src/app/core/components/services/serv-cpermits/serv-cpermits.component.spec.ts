import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCpermitsComponent } from './serv-cpermits.component';

describe('ServCpermitsComponent', () => {
  let component: ServCpermitsComponent;
  let fixture: ComponentFixture<ServCpermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServCpermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServCpermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
