import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UtenteDTO } from '../../../models/interface/i-utente';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isLoading = false;
  utente!: UtenteDTO;

  constructor(private router: Router, private authSrv: AuthService) {}

  registra(form: NgForm) {
    this.isLoading = true;

    try {
      this.utente = {
        nome: form.value.nome,
        cognome: form.value.cognome,
        username: form.value.username,
        email: form.value.email,
        password: form.value.password,
      };

      this.authSrv.register(this.utente).subscribe(
        () => {
          this.router.navigate(['/']);
          this.isLoading = false;
        },
        (error: { error: string }) => {
          console.error(error.error);
          if (error.error === 'Email format is invalid') {
            console.log('Formato email non valido!');
          } else if (error.error === 'Email already exists') {
            console.log('Email già in uso!');
          } else if (error.error === 'Password is too short') {
            console.log('Password troppo corta!');
          }

          this.isLoading = false;
        }
      );
    } catch (error) {
      console.error(error);
      this.isLoading = false;
    }
  }
}
