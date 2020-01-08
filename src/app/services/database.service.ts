import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

//interface of the models

export interface Address {
  id: number,
  city: string,
  state: string,
  country: string,
  pox_X: string,
  pos_Y: string,
}

export interface User {
  id?: number,
  username: string,
  password: string,
  name: string,
  profile?: any,
  bird_date?: string,
  addresses?: number[]
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  user: any;
  USER_STORE = "user";
  ADDRESS_STORE = "address";

  constructor(private dbService: NgxIndexedDBService) {
   }

   login(username: string, password: string, onSuccess: Function, onFail: Function){
      this.dbService.currentStore = this.USER_STORE;

      this.dbService.getByIndex('username', username).then(
        user => {
          this.user = user;
          if(password != user.password){
            onFail();
          }
          else{
            this.user = user;
            onSuccess();
          }
        },
        error => {
          onFail();
        }
      )
   }

   register(user, onSuccess: Function, onFail: Function){
    this.addUser(user).then(
      () => {
        this.user = user;
        onSuccess();
      },
      error => {
        onFail();
      }
    );
   }

   getCurrentUser(): User{
     return this.user;
   }

   getUser(id){
     this.dbService.currentStore = this.USER_STORE;
     return this.dbService.getByKey(id);
   }

   addUser(user: User){
     this.dbService.currentStore = this.USER_STORE;
     return this.dbService.add(user);
   }

   updateUser(user: User){
     this.dbService.currentStore = this.USER_STORE;
     return this.dbService.update(user);
   }

   deleteUser(id){
     this.dbService.currentStore = this.USER_STORE;
     return this.dbService.delete(id);
   }

   /* Adress Method */
   getAddress(id){
    this.dbService.currentStore = this.ADDRESS_STORE;
    return this.dbService.getByKey(id);
  }

   addAddress(address: Address){
     this.dbService.currentStore = this.ADDRESS_STORE;
     return this.dbService.add(address);
   }

   updateAddress(address: Address){
    this.dbService.currentStore = this.ADDRESS_STORE;
    return this.dbService.update(address);
  }

  deleteAddress(address: Address){
    this.dbService.currentStore = this.ADDRESS_STORE;
    return this.dbService.delete(address);
  }


}
