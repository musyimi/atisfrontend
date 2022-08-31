import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridComponent } from './hybrid.component';

describe('HybridComponent', () => {
  let component: HybridComponent;
  let fixture: ComponentFixture<HybridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HybridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
