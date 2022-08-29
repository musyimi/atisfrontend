import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec3Component } from './home-sec3.component';

describe('HomeSec3Component', () => {
  let component: HomeSec3Component;
  let fixture: ComponentFixture<HomeSec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSec3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
