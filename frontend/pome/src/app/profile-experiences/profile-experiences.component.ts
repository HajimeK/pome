import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-experiences',
  templateUrl: './profile-experiences.component.html',
  styleUrls: ['./profile-experiences.component.css']
})
export class ProfileExperiencesComponent implements OnInit {

  experiences = [
    {name:"AIoT Streaming Analytics",description: "Workshop to empower a partner ready for AIoT(AI+IoT) streaming analytics", url: "NA"},
    {name:"Consumer Project IoT", description: "As an engineer in a PoC to make customer product ready for IoT. Technology lead in defining subsequent commercialization requirements (1.5 year)", url: "NA"},
    {name:"Fleet IoT",description: "Fleet solution packaging project targeting the Japanese market. Install in-vehicle devices and collect data from platforms. From on-site data collection, provided the scoring function of the driver's behavior data using ML methods (4 months)", url: "NA"},
    {name:"AutoML with Azure ML", description: "build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.", url: "https://github.com/HajimeK/nd00333_AZMLND_Optimizing_a_Pipeline_in_Azure-Starter_Files"},
    {name:"MLOps with Azure ML", description: "Deploy trained models to an end point what is consumable with REST API calls", url: "https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files"},
    {name:"Azure ML with real data", description: "Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected larger than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.", url: "https://github.com/HajimeK/nd00333-capstone"},
    {name:"Azure Performance", description: "Investigate Azure perfomance using Application Insights, Logs and etc, and autoscale when needed", url: "https://github.com/HajimeK/nd081-c4-azure-performance-project-starter"},
    {name:"Migrating to Azure", description: "Making application to work with cloud managed services, like Azure Functions, service bus queue messaging", url: "https://github.com/HajimeK/nd081-c3-Migrating-Non-Native-Cloud-Applications-project-starter"},
    {name:"Azure Web App with REST & Cosmos DB backend", description: "Azure Web App with REAT API withAzure Functions and Mongo DB", url: "https://github.com/HajimeK/nd081-c2-Building-and-deploying-cloud-native-applications-from-scratch-project-starter"},
    {name:"CMS app on Azure with AD credential", description: "CMS app with OAuth2 with Sign in with Microsoft using the msal library, along with app logging.", url: "https://github.com/HajimeK/nd081-c1-provisioning-microsoft-azure-vms-project-starter/blob/master/WRITEUP.md"},
    {name:"Person Detection with Intel OpenVINO", description: "Using SSD, Single Shot Multibox Detector, to detect people in real-time streaming video. Can operate both with Intel CPU embedded GPU and Intel USB VPU", url: "https://github.com/HajimeK/nd131-openvino-fundamentals-project-starter/blob/master/WRITEUP.md"},
    {name:"AIoT, Anormaly Detection", description: "Reducing the failure rate of trucks is critical in logictics business. A machine lerning model for predictive analytics.", url: "https://github.com/HajimeK/machine-learning/blob/master/projects/capstone/report/capstone.md"},
    {name:"Blockchain applied Supply Chaing", description: "Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer.", url: "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_6_Supply_Chain"},
    {name:"Blockchian applied to Flight Insureance", description: "Decentralized App withvoting algorithm for flight insurance among passengers and flight companies", url: "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_FlightSurety"},
    {name:"Blockchain applied to NFT", description: "Smart Contract app to exchange items in OpenSea market place using NFT", url: "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_Capstone"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
