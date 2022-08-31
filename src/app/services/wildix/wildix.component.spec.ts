import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildixComponent } from './wildix.component';

describe('WildixComponent', () => {
  let component: WildixComponent;
  let fixture: ComponentFixture<WildixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
