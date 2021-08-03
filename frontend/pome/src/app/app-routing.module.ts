import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSkillsComponent } from './profile-skills/profile-skills.component';
import { ProfileExperiencesComponent } from './profile-experiences/profile-experiences.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'projectpage', component: ProjectpageComponent},
  {path: 'profile_skills', component: ProfileSkillsComponent},
  {path: 'profile_experience', component: ProfileExperiencesComponent},
  {path: 'profilepage', component: ProfilepageComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
