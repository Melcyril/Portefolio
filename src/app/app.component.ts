import { Component, HostListener, OnInit } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <app-menu></app-menu>
    <div class="backgroundcolor">

<div class="animation">
       <h1 class="titreFull">DEVELOPPEUR FULLSTACK</h1>
</div>

</div>
<app-about [@fadeInOut]="showDiv ? 'in' : 'out'" *ngIf="showDiv"></app-about>
<app-fullstack [@fadeInOut]="showDiv ? 'in' : 'out'" *ngIf="!showDiv"></app-fullstack>
<label class="switch">
<input type="checkbox" (click)="onToggle()">
<span class="slider round"></span>
</label>


<app-skills></app-skills>

<app-projet></app-projet>   

<app-interet></app-interet>
<!--
<app-gestion></app-gestion> -->
<app-animation-caractere></app-animation-caractere>
<app-contact></app-contact> 
    <app-animation-tree></app-animation-tree>

  `,
  styles: []
})
export class AppComponent{
  constructor(private globalService: GlobalService) {}
showDiv:boolean=false
showScrollbar = false; // Variable pour afficher/masquer la barre de défilement

// Méthode pour détecter le défilement
@HostListener('window:scroll', ['$event'])

onScroll(event: UIEvent): void {
  // Affichez la barre de défilement pendant le défilement
  this.showScrollbar = true;

  // Réinitialisez le délai d'inactivité
  clearTimeout(this.scrollTimeout);

  // Masquez la barre de défilement après 2 secondes d'inactivité
  this.scrollTimeout = setTimeout(() => {
    this.showScrollbar = false;
  }, 2000);
}

private scrollTimeout: any; // Variable pour gérer le délai d'inactivité

onToggle():void{
  this.showDiv = !this.showDiv;
  this.globalService.isScrollAbout=!this.globalService.isScrollAbout
console.log('------'+this.showDiv+'iiii '+this.globalService.isScrollAbout)
}
}
