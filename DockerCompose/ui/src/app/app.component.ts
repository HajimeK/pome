import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portofolio Of My Experiences';
  ngOnInit(){
    AOS.init();
    setTheme('bs4');
  }
}