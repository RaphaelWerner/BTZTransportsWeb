import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesEmpresaComponent } from './informacoes-empresa.component';

describe('InformacoesEmpresaComponent', () => {
  let component: InformacoesEmpresaComponent;
  let fixture: ComponentFixture<InformacoesEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
