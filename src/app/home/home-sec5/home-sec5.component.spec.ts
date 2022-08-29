import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec5Component } from './home-sec5.component';

describe('HomeSec5Component', () => {
  let component: HomeSec5Component;
  let fixture: ComponentFixture<HomeSec5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSec5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
