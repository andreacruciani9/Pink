import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndirizzoComponent } from './indirizzo.component';

describe('IndirizzoComponent', () => {
  let component: IndirizzoComponent;
  let fixture: ComponentFixture<IndirizzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndirizzoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndirizzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
