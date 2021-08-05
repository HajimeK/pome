import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { PortofolioListComponent } from './portofolio-list/portofolio-list.component';
import { PortofoliopageComponent } from './portofoliopage/portofoliopage.component';
import { ProfileSkillsComponent } from './profile-skills/profile-skills.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { ProfileExperiencesComponent } from './profile-experiences/profile-experiences.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ProfileAboutComponent } from './profile-about/profile-about.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    PortofolioListComponent,
    PortofoliopageComponent,
    ProfileSkillsComponent,
    SkillCardComponent,
    ProfileExperiencesComponent,
    ExperienceCardComponent,
    ProfileAboutComponent,
    ProfilepageComponent,
    ProjectpageComponent,
    ContactComponent
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
