import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibrecomponentComponent } from './fibrecomponent.component';

describe('FibrecomponentComponent', () => {
  let component: FibrecomponentComponent;
  let fixture: ComponentFixture<FibrecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibrecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibrecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
