import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductosComponent } from './details-productos.component';

describe('DetailsProductosComponent', () => {
  let component: DetailsProductosComponent;
  let fixture: ComponentFixture<DetailsProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
