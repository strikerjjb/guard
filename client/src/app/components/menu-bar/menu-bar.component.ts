import { Component, OnInit } from '@angular/core';
import { RoleNames } from '../../constants/role-names';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  public showProfileLink: boolean = false;
  private roles: string[] = ["CUSTOMER"];

  constructor() { }

  ngOnInit(): void {
    this.checkAccess();
  }

  private checkAccess() 
  {
    if (this.roles.includes(RoleNames.CUSTOMER)) 
    {
      this.showProfileLink = true;
    }
  }
}
