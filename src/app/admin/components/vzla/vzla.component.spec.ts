import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VzlaComponent } from './vzla.component';

describe('VzlaComponent', () => {
  let component: VzlaComponent;
  let fixture: ComponentFixture<VzlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VzlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VzlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
