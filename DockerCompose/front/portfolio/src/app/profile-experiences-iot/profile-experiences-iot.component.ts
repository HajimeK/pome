import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile-experiences-iot',
  templateUrl: './profile-experiences-iot.component.html',
  styleUrls: ['./profile-experiences-iot.component.css']
})
export class ProfileExperiencesIotComponent implements OnInit {
  experiences = [
    {name:"Fleet IoT",description: "Fleet solution packaging project targeting the Japanese market. Install in-vehicle devices and collect data from platforms. From on-site data collection, provided the scoring function of the driver's behavior data using ML methods (4 months)", url: "NA"},
    {name:"AIoT, Anormaly Detection", description: "Reducing the failure rate of trucks is critical in logictics business. A machine lerning model for predictive analytics.", url: "https://github.com/HajimeK/machine-learning/blob/master/projects/capstone/report/capstone.md"},
    {name:"AIoT Streaming Analytics",description: "Workshop to empower a partner ready for AIoT(AI+IoT) streaming analytics", url: "NA"},
    {name:"Consumer Project IoT", description: "As an engineer in a PoC to make customer product ready for IoT. Technology lead in defining subsequent commercialization requirements (1.5 year)", url: "NA"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
