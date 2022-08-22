import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AddmissionComponent } from './mission/addmission/addmission.component';
import { ListmissionComponent } from './mission/listmission/listmission.component';
import { AddMessageComponent } from './message/add-message/add-message.component';
import { ListMessageComponent } from './message/list-message/list-message.component';
import { AddComplaintsComponent } from './complaints/add-complaints/add-complaints.component';
import { ListComplaintsComponent } from './complaints/list-complaints/list-complaints.component';
import { AddFollowersComponent } from './followers/add-followers/add-followers.component';
import { ListFollowersComponent } from './followers/list-followers/list-followers.component';
import { AddSearchComponent } from './search/add-search/add-search.component';
import { ListSearchComponent } from './search/list-search/list-search.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { UpdateInvitationComponent } from './update-invitation/update-invitation.component';
import { AddInvitationComponent } from './add-invitation/add-invitation.component';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from 'src/environments/environment';


@NgModule({
    declarations: [
    AppComponent,
    MenuComponent,
    UpdateInvitationComponent,
    InvitationsComponent,
    AddInvitationComponent,
    AddmissionComponent,
    ListmissionComponent,
    AddMessageComponent,
    ListMessageComponent,
    AddComplaintsComponent,
    ListComplaintsComponent,
    AddFollowersComponent,
    ListFollowersComponent,
    AddSearchComponent,
    ListSearchComponent,
    AddProfileComponent,
    ListProfileComponent,
    LoginPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
