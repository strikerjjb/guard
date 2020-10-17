import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public  username:  string  =  "Test";
  public  email:  string  =  "";
  public  password:  string  =  "";
  public  confirmPassword:  string  =  "";
  public  birthdate:  FormControl = new FormControl(new Date());

  constructor() { }

  ngOnInit(): void {

  }

  update(): void {
    console.log('Registered');
  }

}
