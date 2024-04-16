import { group } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: [
  ]
})

export class AccueilComponent{
  @HostListener('window:scroll', [])
  onScroll(): void {
      console.log('Je scroll !');
  }
} 
