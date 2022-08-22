import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes=[


  {path: '', component: MenuComponent,children:[
  {path: 'add-invitation', component: AddInvitationComponent },

  {path: 'invitations', component: InvitationsComponent },
    {path: "updateInvitation/:id",  component: UpdateInvitationComponent},
  { path: "", redirectTo: "invitations", pathMatch: "full" },

  {path: 'mission', component: AddmissionComponent },
  {path: 'mission', component: ListmissionComponent },
      {path: 'message', component: AddMessageComponent },
      {path: 'login', component: LoginPageComponent },

      {path: 'message', component: ListMessageComponent },
      {path: 'complaints', component: AddComplaintsComponent },
      {path: 'complaints', component: ListComplaintsComponent },
      {path: 'followers', component: AddFollowersComponent },
      {path: 'followers', component: ListFollowersComponent },
      {path: 'search', component: AddSearchComponent },
      {path: 'search', component: ListSearchComponent },
      {path: 'profile', component: AddProfileComponent },
      {path: 'profile', component: ListProfileComponent },


]},
  ];
@NgModule({



  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
