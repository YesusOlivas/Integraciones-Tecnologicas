import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFacturacionComponent } from './create-facturacion.component';

describe('CreateFacturacionComponent', () => {
  let component: CreateFacturacionComponent;
  let fixture: ComponentFixture<CreateFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFacturacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
