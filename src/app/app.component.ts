import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
declare let AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pome';
  ngOnInit(){
    AOS.init();
    setTheme('bs4')
  }
}
