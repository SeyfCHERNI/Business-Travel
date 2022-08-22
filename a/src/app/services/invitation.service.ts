import { Injectable } from '@angular/core';
import { invitation } from '../model/invitation.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  apiURL: string = 'http://localhost:8091/SpringSecurity/invitation/api';
  public getImage = new Subject<string>();

  invitations: invitation[];
Invitation: invitation;
  // produit : Produit;

  constructor(private http : HttpClient) {
    /*  this.produits = [
        {idProduit : 1, nomProduit:"PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
        {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
        {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
      ];*/
  }


  listeInvitation(): Observable<invitation[]>{
    return this.http.get<invitation[]>(this.apiURL);
  }


  ajouterInvitation( prod: invitation): Observable<invitation>{
    return this.http.post<invitation>(this.apiURL, prod, httpOptions);
  }


  supprimerInvitation(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterInvitatio(id: number): Observable<invitation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<invitation>(url);
  }



  updateInvitation(invitationId:number, Invitation: invitation) : Observable<Object>
  {
    return this.http.put(`${this.apiURL}/${invitationId}`, Invitation);
  }

  getInviNum(): Observable<any>
  {
    return this.http.get('http://localhost:8091/SpringSecurity/invitation/invitnum');
  }


}
