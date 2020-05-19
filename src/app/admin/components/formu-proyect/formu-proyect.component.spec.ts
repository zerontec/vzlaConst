import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuProyectComponent } from './formu-proyect.component';

describe('FormuProyectComponent', () => {
  let component: FormuProyectComponent;
  let fixture: ComponentFixture<FormuProyectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuProyectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
