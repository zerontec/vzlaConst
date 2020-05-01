import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServProposalComponent } from './serv-proposal.component';

describe('ServProposalComponent', () => {
  let component: ServProposalComponent;
  let fixture: ComponentFixture<ServProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
