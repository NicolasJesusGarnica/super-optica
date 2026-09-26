import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Hd } from './hd';

describe('Hd', () => {
  let component: Hd;
  let fixture: ComponentFixture<Hd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hd],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
