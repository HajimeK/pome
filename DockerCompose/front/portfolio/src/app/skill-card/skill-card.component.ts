import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {
  @Input() title:string
  @Input() level:string
  @Input() description:string

  constructor() {
    this.title = "";
    this.level = "";
    this.description = "";
  }

  ngOnInit(): void {
  }

}