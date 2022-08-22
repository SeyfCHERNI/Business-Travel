import { Component, OnInit } from '@angular/core';
import { invitation } from '../model/invitation.model';
import { InvitationService } from '../services/invitation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']

})

export class InvitationsComponent implements OnInit {

  invitations : invitation[];
  numi : number;

  constructor(private invitationService: InvitationService,
             private router: Router) {

   //this.produits = produitService.listeProduit();

  }

  ngOnInit(): void {
  this.invitationService.listeInvitation().subscribe(prods => {
       console.log(prods);
       this.invitations = prods;
       });
  this.invitationService.getInviNum().subscribe(num => {console.log(num);
                                                        this.numi = num;
  });
 }

  supprimerInvitation(i: invitation)
  {
    console.log("suppppppppppppppppppppppppppppp supprimé");
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.invitationService.supprimerInvitation(i.invitationId).subscribe(() => {
        console.log("invitation supprimé");
       this.SuprimerInvitationDuTableau(i);
       this.SuprimerInvitationDuTableau(i);
      });
  }
  SuprimerInvitationDuTableau(prod : invitation) {
    this.invitations.forEach((cur, index) => {
      if(prod.invitationId=== cur.invitationId) {
        this.invitations.splice(index, 1);
      }
    });
  }


}
