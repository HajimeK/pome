import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() name:string
  @Input() description:string
  @Input() url:string

  constructor() {
    this.name = "";
    this.description = "";
    this.url = "";
  }
  ngOnInit(): void {
  }

}
