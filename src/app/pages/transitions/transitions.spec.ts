import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TransitionsComponent } from './transitions';

describe('TransitionsComponent', () => {
  let component: TransitionsComponent;
  let fixture: ComponentFixture<TransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionsComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});