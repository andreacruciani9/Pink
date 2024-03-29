import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottonavComponent } from './sottonav.component';

describe('SottonavComponent', () => {
  let component: SottonavComponent;
  let fixture: ComponentFixture<SottonavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SottonavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SottonavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
