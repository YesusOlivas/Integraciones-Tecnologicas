import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFacturacionComponent } from './update-facturacion.component';

describe('UpdateFacturacionComponent', () => {
  let component: UpdateFacturacionComponent;
  let fixture: ComponentFixture<UpdateFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFacturacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
