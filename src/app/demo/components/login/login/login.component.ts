import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { PasswordModule } from 'primeng/password';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    CheckboxModule,
    AppConfigModule,
    PasswordModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(public layoutService: LayoutService, private router: Router, private authService: AuthService){}
  usuario: string = '';
  contrasenia: string = '';

  ngOnInit(){
    this.authService.logout();
  }
  
  login(){
    const success = this.authService.login(this.usuario, this.contrasenia);
    if(success){
      this.router.navigate(['/Inicio/Dashboard']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
