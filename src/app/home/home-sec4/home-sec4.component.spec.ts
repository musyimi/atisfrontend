import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSec4Component } from './home-sec4.component';

describe('HomeSec4Component', () => {
  let component: HomeSec4Component;
  let fixture: ComponentFixture<HomeSec4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSec4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSec4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
