import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-experiences-aiml',
  templateUrl: './profile-experiences-aiml.component.html',
  styleUrls: ['./profile-experiences-aiml.component.css']
})
export class ProfileExperiencesAimlComponent implements OnInit {
  experiences = [
    {name:"Fleet IoT",description: "Fleet solution packaging project targeting the Japanese market. Install in-vehicle devices and collect data from platforms. From on-site data collection, provided the scoring function of the driver's behavior data using ML methods (4 months)", url: "NA"},
    {name:"AutoML with Azure ML", description: "build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.", url: "https://github.com/HajimeK/AzureML_Optimizing_a_Pipeline"},
    {name:"MLOps with Azure ML", description: "Deploy trained models to an end point what is consumable with REST API calls", url: "https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files"},
    {name:"Azure ML with real data", description: "Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected larger than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.", url: "https://github.com/HajimeK/nd00333-capstone"},
    {name:"Person Detection with Intel OpenVINO", description: "Using SSD, Single Shot Multibox Detector, to detect people in real-time streaming video. Can operate both with Intel CPU embedded GPU and Intel USB VPU", url: "https://github.com/HajimeK/nd131-openvino-fundamentals-project-starter/blob/master/WRITEUP.md"},
    {name:"AIoT, Anormaly Detection", description: "Reducing the failure rate of trucks is critical in logictics business. A machine lerning model for predictive analytics.", url: "https://github.com/HajimeK/machine-learning/blob/master/projects/capstone/report/capstone.md"},
    {name:"AIoT Streaming Analytics",description: "Workshop to empower a partner ready for AIoT(AI+IoT) streaming analytics", url: "NA"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
