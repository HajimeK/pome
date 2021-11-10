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
  public experiences: Experience[] = [];
  public tag: string = "";

  constructor(private route: ActivatedRoute, private experienceAppService: ExperiencesApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('tag') === null) {
        this.tag = "";
      } else {
        this.tag = params.get('tag') as string;
      }
      this.experienceAppService.getExperiences(this.tag).subscribe(async (objs) => {
        this.experiences = objs;
      });
    });
  }
}
