import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CLIENTES } from 'src/app/demo/data/customer_data';
import { Cliente } from 'src/app/demo/models/customer_model';
import { CreateClientesComponent } from '../create-clientes/create-clientes.component';

@Component({
  selector: 'app-read-clientes',
  standalone: true,
  imports: [
    CommonModule, 
    CardModule,
    CreateClientesComponent
  ],
  templateUrl: './read-clientes.component.html',
  styleUrl: './read-clientes.component.scss'
})

export class ReadClientesComponent {
  clientes: Cliente[] = CLIENTES;
}
