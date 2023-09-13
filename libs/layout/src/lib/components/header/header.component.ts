import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DxButtonModule, DxToolbarModule } from 'devextreme-angular';
import { AppInfoService, AuthService, IUser, ScreenService } from '../../services';

@Component({
  selector: 'lseg-header',
  standalone: true,
  imports: [CommonModule, DxButtonModule, DxToolbarModule],
  providers: [AuthService, ScreenService, AppInfoService],
  template: `
    <header>
      <dx-toolbar class="header-toolbar">
        <dxi-item
          location="before"
          widget="dxButton"
          cssClass="menu-button"
          [options]="{
            icon: 'menu',
            stylingMode: 'text',
            onClick: toggleMenu
          }"
        >
        </dxi-item>
        <dxi-item location="before" cssClass="header-title" *ngIf="title" [text]="title"> </dxi-item>
        <dxi-item location="after" locateInMenu="auto" menuItemTemplate="menuItem">
          <dx-button class="user-button authorization" width="210px" height="100%" stylingMode="text"> </dx-button>

          <div *dxTemplate="let data of 'item'">
            <dx-button class="user-button authorization" width="210px" height="100%" stylingMode="text"> </dx-button>
          </div>
        </dxi-item>
      </dx-toolbar>
    </header>
  `,
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: IUser | null = { email: '' };

  userMenuItems = [
    {
      text: 'Profile',
      icon: 'user',
      onClick: () => {
        this.router.navigate(['/profile']);
      },
    },
    {
      text: 'Logout',
      icon: 'runner',
      onClick: () => {
        this.authService.logOut();
      },
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUser().then(e => (this.user = e.data));
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}
