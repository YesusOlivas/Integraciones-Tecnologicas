import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadClientesComponent } from './read-clientes.component';

describe('ReadClientesComponent', () => {
  let component: ReadClientesComponent;
  let fixture: ComponentFixture<ReadClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadClientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
