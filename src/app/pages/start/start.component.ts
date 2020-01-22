import { Router } from '@angular/router';
import { DatabaseService, User } from "./../../services/database.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { resolve } from "url";
import { mustMatch } from "src/app/helpers/must-match.validator";


@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"]
})
export class StartComponent implements OnInit {
  inputs: any;
  loginForm: FormGroup;
  registerForm: FormGroup;
  user: User;
  error_login_message;
  error_register_message;
  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.js_initalisation();
  }

  js_initalisation(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, { validator: mustMatch("password", "confirm_password") });
  }

  onSubmit() {
    if (!this.loginForm.invalid) {
      const formValue = this.loginForm.value;
      this.databaseService.login(
        formValue["username"],
        formValue["password"],
        () => {
          console.log('Login reussi');
          this.router.navigateByUrl('/weather');
        },
        () => {
          this.error_login_message = 'Identifiants incorrects';
          console.log('Login echoué');
        }
      );
    }
  }

  onSubmitRegister(){
    if(!this.registerForm.invalid){
      const formValue = this.registerForm.value;
      let user = {
        name: formValue['name'],
        username: formValue['username'],
        password: formValue['password']
      };

      this.databaseService.register(user,()=> {
        console.log('Register reussi');
        this.router.navigateByUrl('/weather');
      }, ()=> {
        console.log('Register echoué');
        this.error_register_message = "Le nom d'utilisateur est déjà pris";
      })
    }
  }

  resetError(){
    this.error_login_message = undefined;
  }

  resetRegisterError(){
    this.error_register_message = undefined;
  }

  get name(){
    return this.registerForm.get('name');
  }

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirm_password');
  }
}
