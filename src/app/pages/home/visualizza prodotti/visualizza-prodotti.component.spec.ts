import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaProdottiComponent } from './visualizza-prodotti.component';

describe('VisualizzaProdottiComponent', () => {
  let component: VisualizzaProdottiComponent;
  let fixture: ComponentFixture<VisualizzaProdottiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizzaProdottiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizzaProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
