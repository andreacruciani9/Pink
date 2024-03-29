import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaProdottoComponent } from './crea-prodotto.component';

describe('CreaProdottoComponent', () => {
  let component: CreaProdottoComponent;
  let fixture: ComponentFixture<CreaProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaProdottoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
