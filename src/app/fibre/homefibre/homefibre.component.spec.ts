import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefibreComponent } from './homefibre.component';

describe('HomefibreComponent', () => {
  let component: HomefibreComponent;
  let fixture: ComponentFixture<HomefibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefibreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomefibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
