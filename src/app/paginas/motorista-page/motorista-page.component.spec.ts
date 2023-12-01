import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoristaPageComponent } from './motorista-page.component';

describe('MotoristaPageComponent', () => {
  let component: MotoristaPageComponent;
  let fixture: ComponentFixture<MotoristaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoristaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotoristaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
