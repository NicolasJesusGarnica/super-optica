import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AgeProtectionComponent } from './age-protection';

describe('AgeProtectionComponent', () => {
  let component: AgeProtectionComponent;
  let fixture: ComponentFixture<AgeProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeProtectionComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeProtectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
