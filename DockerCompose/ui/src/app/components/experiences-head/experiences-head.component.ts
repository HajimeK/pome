import { Component, OnInit } from '@angular/core';
import { ExperiencesApiService } from 'src/app/services/experiences-api.service';
import { Tag } from 'src/app/services/model';

@Component({
  selector: 'app-experiences-head',
  templateUrl: './experiences-head.component.html',
  styleUrls: ['./experiences-head.component.css']
})
export class ExperiencesHeadComponent implements OnInit {

  tags: Tag[] = [{id:0, tag:"AIML"}, {id:0, tag:"IoT"}, {id:0, tag:"Blockchain"}, {id:0, tag:"Cloud"}];
  constructor(){}
  //constructor(private experienceAppService: ExperiencesApiService) {}

  ngOnInit(): void {
    // this.experienceAppService.getTags().subscribe(async (tags) => {
    //   this.tags = tags;
    // });
  }
}
