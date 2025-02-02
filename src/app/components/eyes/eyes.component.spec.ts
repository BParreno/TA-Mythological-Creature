import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesComponent } from './eyes.component';

describe('EyesComponent', () => {
  let component: EyesComponent;
  let fixture: ComponentFixture<EyesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
