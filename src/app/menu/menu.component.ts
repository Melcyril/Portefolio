import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent{
  monNom:string="Melin"
  monPrenom:string="Cyril"

  activeLink: string = '';
  showMenu:boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showMenu = window.innerWidth < 600; // Met à jour showMenu en fonction de la largeur de l'écran
  }
  toggleMenu() {
    this.showMenu= !this.showMenu;
  }
  scrollTo(lien:string) {
    const skillsSection = document.getElementById(lien);
    
    if (skillsSection) {
        this.activeLink =lien
        skillsSection.scrollIntoView({ behavior: 'smooth' });
        this.showMenu= window.innerWidth < 600;
    } 
  }
  
}
