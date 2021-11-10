import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesContentComponent } from './components/experiences-content/experiences-content.component';

const routes: Routes = [
  { path: '', component: ExperiencesContentComponent},
  { path: 'experience/:tag', component: ExperiencesContentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
