import { Component, OnInit } from '@angular/core';
import { ExperiencesApiService } from 'src/app/services/experiences-api.service';
import { Tag } from 'src/app/services/model';

@Component({
  selector: 'app-experiences-head',
  templateUrl: './experiences-head.component.html',
  styleUrls: ['./experiences-head.component.css']
})
export class ExperiencesHeadComponent implements OnInit {

  tags: Tag[] = [];
  constructor(private experienceAppService: ExperiencesApiService) {}

  ngOnInit(): void {
    this.experienceAppService.getTags().subscribe(async (tags) => {
      this.tags = tags;
    });
  }
}
