import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SideNavOuterToolbarComponent } from '../../components/side-nav-outer-toolbar/side-nav-outer-toolbar.component';
import { AppInfoService, AuthService, ScreenService } from '../../services';

@Component({
  selector: 'lseg-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, SideNavOuterToolbarComponent],
  providers: [AuthService, ScreenService, AppInfoService],
  template: `
    <!--    <ng-container *ngIf="isAuthenticated()">-->
    <lseg-side-nav-outer-toolbar title="{{ appInfo.title }}">
      <ng-content></ng-content>
    </lseg-side-nav-outer-toolbar>

    <lseg-footer>
      Copyright © 2023-{{ appInfo.currentYear }} {{ appInfo.title }} Inc.
      <br />
      All trademarks or registered trademarks are property of their respective owners.
    </lseg-footer>

    <!--    </ng-container>-->

    <!--    <div>                                         -->
    <!--      <lseg-nav></lseg-nav>                       -->
    <!--      <ng-content></ng-content>                   -->
    <!--      <lseg-aside></lseg-aside>                   -->
    <!--      <lseg-footer></lseg-footer>                 -->
    <!--    </div>                                        -->
    <!--    This example requires updating your template: -->
  `,
  styles: [],
})
export class LayoutComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes)
      .filter(cl => this.screen.sizes[cl])
      .join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {}

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
