import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaCadastroPageComponent } from './motorista-cadastro-page.component';

describe('MotoristaCadastroPageComponent', () => {
  let component: MotoristaCadastroPageComponent;
  let fixture: ComponentFixture<MotoristaCadastroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoristaCadastroPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotoristaCadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
