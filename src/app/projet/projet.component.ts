import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PROJETS } from '../../shared/projet-mock'; 
import {Projet} from '../../shared/projet';
import { count } from 'rxjs';
import { trigger, state, style, animate, transition, group, query } from '@angular/animations';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styles: [
  ],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        visibilty:'hidden',
        opacity: 0
      })),
      state('*', style({
       visibility:'visible',
        opacity: 1
      })),
      transition('void <=> *', animate(800)),
    ]),
  ]
})
export class ProjetComponent implements OnInit {


  mesProjets:Projet[] = PROJETS;
  startIndex = 4;
  suivantIndex= this.startIndex +1
  opacityProjet  = 1;
  altMessageNext="Projet"+this.startIndex.toString+"-"+"Projet"+this.suivantIndex.toString()
  indexOuvert:number=-1
  tremble: boolean = false;
  showBtn:boolean = false;

  ajouterTremble() {
    this.tremble = true;
  }

  retirerTremble() {
    this.tremble = false;
  }
ngOnInit(): void {
    
    console.table(this.mesProjets)
}

  afficherDetails(projet: Projet) {
  
    if(this.indexOuvert!=-1){
      this.mesProjets[this.indexOuvert].detailsVisible=false
    }
    this.indexOuvert=projet.id
    projet.detailsVisible = true;
    console.log(projet.id+"-id-")
  }

  fermerDetails(projet: Projet) {
    this.tremble = false;
    projet.detailsVisible = false;
    const scrollProjet=document.getElementById('projet')
    if(scrollProjet)
    scrollProjet.scrollIntoView({ behavior: 'smooth' });
  }
  //Visuel des 2 prochains projet
  showNextProjets() {
    this.mesProjets[this.startIndex].detailsVisible=false
    this.mesProjets[this.startIndex+1].detailsVisible=false
 

    this.opacityProjet = 0; // Réinitialise l'opacité
    setTimeout(() => {
      this.opacityProjet  = 1; // Met à jour l'opacité après 0,5 seconde
    }, 250);
    this.startIndex += 2;
  }
  //Visuel des 2 prochains avant
  showPreviousProjets() {
    this.mesProjets[this.startIndex].detailsVisible=false
    this.mesProjets[this.startIndex-1].detailsVisible=false
    
 

    this.opacityProjet = 0; // Réinitialise l'opacité
    setTimeout(() => {
      this.opacityProjet  = 1; // Met à jour l'opacité après 0,5 seconde
    }, 250);
    this.startIndex -= 2;
  }
  selectProjet(projet: Projet){
    console.log(`click sur le projet -> ${projet.titre}`)
  }
}