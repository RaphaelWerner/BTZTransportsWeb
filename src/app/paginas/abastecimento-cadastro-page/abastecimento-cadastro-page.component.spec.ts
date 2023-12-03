import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbastecimentoCadastroPageComponent } from './abastecimento-cadastro-page.component';

describe('AbastecimentoCadastroPageComponent', () => {
  let component: AbastecimentoCadastroPageComponent;
  let fixture: ComponentFixture<AbastecimentoCadastroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbastecimentoCadastroPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbastecimentoCadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
