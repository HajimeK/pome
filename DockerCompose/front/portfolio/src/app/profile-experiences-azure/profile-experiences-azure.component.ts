import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile-experiences-azure',
  templateUrl: './profile-experiences-azure.component.html',
  styleUrls: ['./profile-experiences-azure.component.css']
})
export class ProfileExperiencesAzureComponent implements OnInit {
  experiences = [
    {name:"AutoML with Azure ML", description: "build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.", url: "https://github.com/HajimeK/AzureML_Optimizing_a_Pipeline"},
    {name:"MLOps with Azure ML", description: "Deploy trained models to an end point what is consumable with REST API calls", url: "https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files"},
    {name:"Azure ML with real data", description: "Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected larger than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.", url: "https://github.com/HajimeK/nd00333-capstone"},
    {name:"Azure Performance", description: "Investigate Azure perfomance using Application Insights, Logs and etc, and autoscale when needed", url: "https://github.com/HajimeK/nd081-c4-azure-performance-project-starter"},
    {name:"Migrating to Azure", description: "Making application to work with cloud managed services, like Azure Functions, service bus queue messaging", url: "https://github.com/HajimeK/nd081-c3-Migrating-Non-Native-Cloud-Applications-project-starter"},
    {name:"Azure Web App with REST & Cosmos DB backend", description: "Azure Web App with REAT API withAzure Functions and Mongo DB", url: "https://github.com/HajimeK/nd081-c2-Building-and-deploying-cloud-native-applications-from-scratch-project-starter"},
    {name:"CMS app on Azure with AD credential", description: "CMS app with OAuth2 with Sign in with Microsoft using the msal library, along with app logging.", url: "https://github.com/HajimeK/nd081-c1-provisioning-microsoft-azure-vms-project-starter/blob/master/WRITEUP.md"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
