import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFacturacionComponent } from './read-facturacion.component';

describe('ReadFacturacionComponent', () => {
  let component: ReadFacturacionComponent;
  let fixture: ComponentFixture<ReadFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadFacturacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
