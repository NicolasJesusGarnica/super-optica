import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Materiales } from './materiales';

describe('Materiales', () => {
  let component: Materiales;
  let fixture: ComponentFixture<Materiales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Materiales],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Materiales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
