import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SolarSafeComponent } from './solar-safe';

describe('SolarSafeComponent', () => {
  let component: SolarSafeComponent;
  let fixture: ComponentFixture<SolarSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarSafeComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarSafeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
