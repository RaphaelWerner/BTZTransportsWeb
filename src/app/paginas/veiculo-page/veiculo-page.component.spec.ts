import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoPageComponent } from './veiculo-page.component';

describe('VeiculoPageComponent', () => {
  let component: VeiculoPageComponent;
  let fixture: ComponentFixture<VeiculoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeiculoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeiculoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
