import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScontoComponent } from './sconto.component';

describe('ScontoComponent', () => {
  let component: ScontoComponent;
  let fixture: ComponentFixture<ScontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScontoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
