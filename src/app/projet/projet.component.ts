import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { projets } from '../../shared/projet-mock'; 
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styles: [
  ]
})
export class ProjetComponent {


  mesProjets = projets;

}
console.log(projets);