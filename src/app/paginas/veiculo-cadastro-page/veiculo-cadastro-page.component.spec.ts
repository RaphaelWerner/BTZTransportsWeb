import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoCadastroPageComponent } from './veiculo-cadastro-page.component';

describe('VeiculoCadastroPageComponent', () => {
  let component: VeiculoCadastroPageComponent;
  let fixture: ComponentFixture<VeiculoCadastroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoCadastroPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiculoCadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
