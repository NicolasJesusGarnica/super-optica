import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { BlueStopComponent } from './blue-stop';

describe('BlueStopComponent', () => {
  let component: BlueStopComponent;
  let fixture: ComponentFixture<BlueStopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueStopComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueStopComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


