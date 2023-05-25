import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [CommonModule, LayoutComponent, MainComponent],
  exports: [LayoutComponent, MainComponent],
})
export class LayoutModule {}
