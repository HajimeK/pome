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

  constructor() {}
  //constructor(private route: ActivatedRoute, private experienceAppService: ExperiencesApiService) { }

  ngOnInit() {
    this.tag = "ML";
    this.experiences = [
      {id:0, title:"AutoML with Azure ML", note: "build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.", url: "https://github.com/HajimeK/AzureML_Optimizing_a_Pipeline"},
      {id:0, title:"MLOps with Azure ML", note: "Deploy trained models to an end point what is consumable with REST API calls", url: "https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files"},
      {id:0, title:"Azure ML with real data", note: "Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected larger than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.", url: "https://github.com/HajimeK/nd00333-capstone"},
      {id:0, title:"Azure Performance", note: "Investigate Azure perfomance using Application Insights, Logs and etc, and autoscale when needed", url: "https://github.com/HajimeK/nd081-c4-azure-performance-project-starter"},
      {id:0, title:"Migrating to Azure", note: "Making application to work with cloud managed services, like Azure Functions, service bus queue messaging", url: "https://github.com/HajimeK/nd081-c3-Migrating-Non-Native-Cloud-Applications-project-starter"},
      {id:0, title:"Azure Web App with REST & Cosmos DB backend", note: "Azure Web App with REAT API withAzure Functions and Mongo DB", url: "https://github.com/HajimeK/nd081-c2-Building-and-deploying-cloud-native-applications-from-scratch-project-starter"},
      {id:0, title:"CMS app on Azure with AD credential", note: "CMS app with OAuth2 with Sign in with Microsoft using the msal library, along with app logging.", url: "https://github.com/HajimeK/nd081-c1-provisioning-microsoft-azure-vms-project-starter/blob/master/WRITEUP.md"}
    ];
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   if(params.get('tag') === null) {
    //     this.tag = "";
    //   } else {
    //     this.tag = params.get('tag') as string;
    //   }
    //   this.experienceAppService.getExperiences(this.tag).subscribe(async (objs) => {
    //     this.experiences = objs;
    //   });
    // });
  }
}
