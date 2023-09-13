import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  public get title() {
    return 'Prime UI';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
