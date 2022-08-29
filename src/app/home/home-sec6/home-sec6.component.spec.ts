import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec6Component } from './home-sec6.component';

describe('HomeSec6Component', () => {
  let component: HomeSec6Component;
  let fixture: ComponentFixture<HomeSec6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSec6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
