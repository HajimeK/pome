import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperiencesHeadComponent } from './components/experiences-head/experiences-head.component';
import { ExperiencesContainerComponent } from './components/experiences-container/experiences-container.component';
import { ExperiencesContentComponent } from './components/experiences-content/experiences-content.component';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ProfileComponent,
    ExperiencesHeadComponent,
    ExperiencesContainerComponent,
    ExperiencesContentComponent,
    ExperienceCardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
