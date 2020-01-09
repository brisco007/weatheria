import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  registerForm: FormGroup;
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      name: ['', Validators.required],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required],
      bird_date: ['', Validators.required],
    });
  }

  onSubmit(){
    if(!this.registerForm.invalid){
      const formValue = this.registerForm.value;
      let user = {
        username: formValue['username'],
        password: formValue['password'],
        name: formValue['name'],
        bird_date: formValue['bird_date']
      }
      databaseService.register(user, () => {
        //todo
      }, ()=> {
        //todo
      });
    }
  }

}
