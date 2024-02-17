import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup; // declare the registerForm property
  //crear mensajes de validacion
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es válido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria." },
      { type: "minlength", message: "La contraseña debe tener al menos 6 caracteres." },
      { type: "pattern", message: "La contraseña debe contener al menos una letra y un número." },
    ],
    confirmation_password: [
      { type: "required", message: "La confirmación de la contraseña es obligatoria." },
      { type: "minlength", message: "La confirmación de la contraseña debe tener al menos 6 caracteres." },
      { type: "pattern", message: "La confirmación de la contraseña debe contener al menos una letra y un número." },
    ],
    name: [
      { type: "required", message: "El nombre es obligatorio." },
      { type: "pattern", message: "El nombre solo puede contener letras y espacios." },
    ],
    last_name: [
      { type: "required", message: "El apellido es obligatorio." },
      { type: "pattern", message: "El apellido solo puede contener letras y espacios." },
    ]
  };
  //mensaje respuesta de registro
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private AuthService: AuthService
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$")
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$")
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$")
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z ]*$")
        ])
      )
    });
    }

  ngOnInit() {
  }

  register(register_data: any){
    this.AuthService.registerUser(register_data);
  }
  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }
}