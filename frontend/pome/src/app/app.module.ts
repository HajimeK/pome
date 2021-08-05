import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ProfileSkillsComponent } from './profile-skills/profile-skills.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { ProfileExperiencesComponent } from './profile-experiences/profile-experiences.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileExperiencesAimlComponent } from './profile-experiences-aiml/profile-experiences-aiml.component';
import { ProfileExperiencesAzureComponent } from './profile-experiences-azure/profile-experiences-azure.component';
import { ProfileExperiencesIotComponent } from './profile-experiences-iot/profile-experiences-iot.component';
import { ProfileExperiencesBlockchainComponent } from './profile-experiences-blockchain/profile-experiences-blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ProfileSkillsComponent,
    SkillCardComponent,
    ProfileExperiencesComponent,
    ExperienceCardComponent,
    ContactComponent,
    ProfileExperiencesAimlComponent,
    ProfileExperiencesAzureComponent,
    ProfileExperiencesIotComponent,
    ProfileExperiencesBlockchainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
