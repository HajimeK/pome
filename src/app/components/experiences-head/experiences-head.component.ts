import { Component, OnInit } from '@angular/core';
import { ExperiencesApiService } from '../../services/experiences-api.service';
import { Tag } from '../../services/model';

@Component({
  selector: 'app-experiences-head',
  templateUrl: './experiences-head.component.html',
  styleUrls: ['./experiences-head.component.css']
})
export class ExperiencesHeadComponent implements OnInit {

  tags: Tag[] = [];
  constructor(private experienceAppService: ExperiencesApiService) {}

  ngOnInit(): void {
    console.log('loading tags...');
    this.tags = this.experienceAppService.getTags();
  }
}
