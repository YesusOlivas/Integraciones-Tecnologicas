import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProductosComponent } from './read-productos.component';

describe('ReadProductosComponent', () => {
  let component: ReadProductosComponent;
  let fixture: ComponentFixture<ReadProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
