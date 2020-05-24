import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatReceiveComponent } from './what-receive.component';

describe('WhatReceiveComponent', () => {
  let component: WhatReceiveComponent;
  let fixture: ComponentFixture<WhatReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
