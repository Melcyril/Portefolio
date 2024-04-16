import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjetComponent } from './projet/projet.component';
import { ContactComponent } from './contact/contact.component';
import { InteretComponent } from './interet/interet.component';
import { MenuComponent } from './menu/menu.component';
import { GestionComponent } from './gestion/gestion.component';
import { AnimationTreeComponent } from './animation-tree/animation-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccueilComponent,
    SkillsComponent,
    ProjetComponent,
    ContactComponent,
    InteretComponent,
    MenuComponent,
    GestionComponent,
    AnimationTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
