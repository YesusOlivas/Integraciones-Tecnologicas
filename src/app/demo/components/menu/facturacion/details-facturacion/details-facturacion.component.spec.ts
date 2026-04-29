import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFacturacionComponent } from './details-facturacion.component';

describe('DetailsFacturacionComponent', () => {
  let component: DetailsFacturacionComponent;
  let fixture: ComponentFixture<DetailsFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFacturacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
