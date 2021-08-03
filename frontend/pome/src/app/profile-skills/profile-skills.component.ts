import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.css']
})
export class ProfileSkillsComponent implements OnInit {

  skills = [
    {
      item: 'python',
      description: 'Develop applicatiosn with python',
      level:'intermediate'
    },
    {
      item: 'solidity',
      description: 'Implement smart contracts in ethereum',
      level: 'intermediate'
    },
    {
      item: 'node.js',
      description: 'Develop web applications and miscroservices',
      level: 'beginner'
    },
    {
      item: 'java',
      description: 'develop applications',
      level: 'intermediate'
    },
    {
      item: 'c++',
      description: 'develop applications',
      level: 'intermediate'
    },
    {
      item: 'Solution Architect',
      description:'Design solutions with globally understadable architecture',
      level: 'Senior'
    },
    {
      item:'customer facing',
      description:'Establish good relationship with customers to accomplish project',
      level: 'Expert'
    },
    {
      item:'de-escalation',
      description: 'Solve critical customer complaints to avoid churns',
      level: 'Expert'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
