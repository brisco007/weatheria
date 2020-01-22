import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "src/app/services/database.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  inputs: any;

  registerForm: FormGroup;
  constructor(private databaseService: DatabaseService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();

    this.inputs = document.querySelectorAll(".input");
    this.inputs.forEach(input => {
      input.addEventListener("focus", () => {
        let parent = input.parentNode.parentNode;
        parent.classList.add("focus");
      });
      input.addEventListener("blur", () => {
        let parent = input.parentNode.parentNode;
        if (input.value == "") {
          parent.classList.remove("focus");
        }
      });
    });
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      name: ["", Validators.required],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required],
      bird_date: ["", Validators.required]
    });
  }

  onSubmit() {
    if (!this.registerForm.invalid) {
      const formValue = this.registerForm.value;
      let user = {
        username: formValue["username"],
        password: formValue["password"],
        name: formValue["name"],
        bird_date: formValue["bird_date"]
      };
      this.databaseService.register(
        user,
        () => {
          //todo
          console.log('Register reussi');
        },
        () => {
          //todo
          console.log("Register echoué");
        }
      );
    }
  }
}
