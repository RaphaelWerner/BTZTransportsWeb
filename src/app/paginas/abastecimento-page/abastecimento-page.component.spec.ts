import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoPageComponent } from './abastecimento-page.component';

describe('AbastecimentoPageComponent', () => {
  let component: AbastecimentoPageComponent;
  let fixture: ComponentFixture<AbastecimentoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbastecimentoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbastecimentoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
