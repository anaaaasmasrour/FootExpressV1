import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComposantComponent } from './accueil-composant.component';

describe('AccueilComposantComponent', () => {
  let component: AccueilComposantComponent;
  let fixture: ComponentFixture<AccueilComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilComposantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
