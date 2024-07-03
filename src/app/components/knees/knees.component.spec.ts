import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KneesComponent } from './knees.component';

describe('KneesComponent', () => {
  let component: KneesComponent;
  let fixture: ComponentFixture<KneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KneesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
