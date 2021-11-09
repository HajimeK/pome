import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ExperiencesApiService } from 'src/app/services/experiences-api.service';
import { Experience } from 'src/app/services/model';

@Component({
  selector: 'app-experiences-content',
  templateUrl: './experiences-content.component.html',
  styleUrls: ['./experiences-content.component.css']
})
export class ExperiencesContentComponent implements OnInit {
  private experiences: Experience[] = [];

  constructor(private route: ActivatedRoute, private experienceAppService: ExperiencesApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let tag = params.get('tag');
      if(tag === null) {
        tag = "";
      }
      this.experienceAppService.getExperiences(tag).subscribe(async (objs) => {
        this.experiences = objs;
      });
    });
  }
}
