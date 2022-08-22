import { Component, OnInit } from '@angular/core';
import {invitation} from '../model/invitation.model';
import {InvitationService} from '../services/invitation.service';
import { ActivatedRoute, Router } from '@angular/router';
import {v4 as uuidv4} from 'uuid';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-add-invitation',
  templateUrl: './add-invitation.component.html',
  styleUrls: ['./add-invitation.component.css']
})
export class AddInvitationComponent implements OnInit {

  newInvitation = new invitation();
  message !: string;
  registrationFormGroup: FormGroup;
  imageSrc: string;
  selectedFile: File = null;
  downloadURL: Observable<string>;
  firebaseLink: string;
  constructor(private invitationService: InvitationService ,
              private storage: AngularFireStorage, private router: Router){

}


  ngOnInit(): void {
  }

  addInvitation(){
    if (this.newInvitation.picture) {
      this.invitationService.getImage.next(this.newInvitation.picture); }
    this.invitationService.ajouterInvitation(this.newInvitation).subscribe(invi => {
      console.log(invi);

    });

    this.router.navigate(['invitations']).then(() => {
      window.location.reload();
    });

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
      const filePath = `user/${this.newInvitation.invitationId}/${uuid}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, storageFile);
      task.snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe(url => {
              if (url) {
                this.firebaseLink = url;
                this.newInvitation.picture = this.firebaseLink;
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


