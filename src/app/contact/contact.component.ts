import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent {

  nom: string =""
  prenom: string =""
  email: string =""
  message: string =""

  onSubmit() {
    // Traitez les données ici (par exemple, envoyez-les par e-mail)
    console.log('Données soumises :', this.nom, this.prenom, this.email, this.message);
    // Appelez votre service d'envoi d'e-mail ici
    //this.mailService.sendEmail(this.nom, this.prenom, this.email, this.message);


    //this.mailService.sendEmail(sujet, corps, destinataire);
  }
}
