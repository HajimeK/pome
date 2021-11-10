import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() title:string
  @Input() note:string
  @Input() url:string

  constructor() {
    this.title = "";
    this.note = "";
    this.url = "";
  }
  ngOnInit(): void {
  }

}
