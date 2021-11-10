import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
