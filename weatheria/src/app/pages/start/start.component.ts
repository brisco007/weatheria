import { DatabaseService, User } from "./../../services/database.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { resolve } from "url";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"]
})
export class StartComponent implements OnInit {
  inputs: any;
  loginForm: FormGroup;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private databaseService: DatabaseService
  ) {}

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
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    if (!this.loginForm.invalid) {
      const formValue = this.loginForm.value;
      this.databaseService.login(
        formValue["username"],
        formValue["password"],
        () => {
          console.log('Login reussi');
        },
        () => {
          console.log('Login echoué');
        }
      );
    }
  }

  get username() {
    return this.loginForm.get("username");
  }

  get password() {
    return this.loginForm.get("password");
  }
}
