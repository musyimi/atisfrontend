import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec7Component } from './home-sec7.component';

describe('HomeSec7Component', () => {
  let component: HomeSec7Component;
  let fixture: ComponentFixture<HomeSec7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSec7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
