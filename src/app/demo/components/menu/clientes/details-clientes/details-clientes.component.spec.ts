import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClientesComponent } from './details-clientes.component';

describe('DetailsClientesComponent', () => {
  let component: DetailsClientesComponent;
  let fixture: ComponentFixture<DetailsClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
