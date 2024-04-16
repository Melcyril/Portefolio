import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <app-menu></app-menu>
    <router-outlet></router-outlet>
    <app-animation-tree></app-animation-tree>

  `,
  styles: []
})
export class AppComponent{
  constructor(private globalService: GlobalService) {}
  title = 'app-Portefolio';
  @HostListener('window:hover', [])
  onScroll(): void {
      console.log('Je scroll !');
  }
}
