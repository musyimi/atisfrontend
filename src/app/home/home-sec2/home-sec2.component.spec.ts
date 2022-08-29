import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec2Component } from './home-sec2.component';

describe('HomeSec2Component', () => {
  let component: HomeSec2Component;
  let fixture: ComponentFixture<HomeSec2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSec2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
