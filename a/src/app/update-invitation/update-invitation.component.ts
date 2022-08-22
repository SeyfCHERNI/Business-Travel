import { Component, OnInit } from '@angular/core';
import { invitation } from '../model/invitation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { InvitationService } from '../services/invitation.service';
import {finalize} from 'rxjs/operators';
import {v4 as uuidv4} from 'uuid';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-update-invitation',
  templateUrl: './update-invitation.component.html',
  styles: [
  ]
})
export class UpdateInvitationComponent implements OnInit {

  invitationId: number;
  Invitation: invitation = new invitation();
  registrationFormGroup: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  downloadURL: Observable<string>;
  firebaseLink: string;
  constructor(private invitationService: InvitationService,
              private route: ActivatedRoute, private storage: AngularFireStorage,
              private router: Router) { }

  ngOnInit(): void {
    this.invitationId = this.route.snapshot.params['id'];

    this.invitationService.consulterInvitatio(this.invitationId).subscribe(data => {
      this.Invitation = data;
    }, error => console.log(error));
  }

  onSubmit(){
    if (this.Invitation.picture) {
      this.invitationService.getImage.next(this.Invitation.picture); }
    this.invitationService.updateInvitation(this.invitationId, this.Invitation).subscribe( data =>{
        this.goToinvitationsList();
      }
      , error => console.log(error));
  }

  goToinvitationsList(){
    this.router.navigate(['invitations']);
  }



onFileChange(event): void {
  const reader = new FileReader();

  if (event.target.files && event.target.files.length) {
  const [file] = event.target.files;
  reader.readAsDataURL(file);

  reader.onload = () => {

    this.imageSrc = reader.result as string;

    this.registrationFormGroup.patchValue({
      fileSource: reader.result
    });

  };
  const storageFile = event.target.files[0];
  const uuid = uuidv4();
  const filePath = `user/${this.Invitation.invitationId}/${uuid}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(filePath, storageFile);
  task.snapshotChanges()
.pipe(
    finalize(() => {
  this.downloadURL = fileRef.getDownloadURL();
  this.downloadURL.subscribe(url => {
  if (url) {
    this.firebaseLink = url;
    this.Invitation.picture = this.firebaseLink;
  }
});

})
)
.subscribe(url => {
  if (url) {
  }
});

}
}
}
