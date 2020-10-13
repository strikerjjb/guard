import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public  username:  string  =  "";
  public  email:  string  =  "";
  public  password:  string  =  "";
  public  confirmPassword:  string  =  "";
  public  birthDate:  string = ""; 

  constructor() { }

  ngOnInit(): void {
  }

  register(): void {
    console.log('Registered');
  }

}
