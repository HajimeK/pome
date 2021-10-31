import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: string = "25 years of experiences in cutting edge skills in Blockchain/Cloud/Machine Learning/Deep Learning/Quantitative Analysis. As a solution architect and engineer, designed cloud solution architecture for Japanese customers as a customer facing front architect/engineer for overseas service vendors.\n\
  \nSkills\n\
  ・Machine Learning/Artificial Intelligence (Shallow, Deep, Reinforcement Learning) SK-Learn, Keras, PyTorch\n\
  •	Anomality detection with AIoT (PoC, provided Hands on to clients)\n\
  •	Driver behavior scoring\n\
  •	Operation Monitoring from vibration signals\n\
  Blockchain (Ethereum smart contract with Solidity/React dApp) development\n\
  •	GitHub Arctic Code Vault Contributor with 2 Ethereum Blockchain GitHub repositories\n\
  o	Applications https://github.com/HajimeK/BlockchainDevND\n\
  >	Coffee beans Supply Chain Tracking\n\
  >	dApp + React\n\
  >	Marketplace Project with NFT\n\
  ・Backend development with TypeScript\n\
  ・End to end architect/engineering/delivery in IoT/connectivity \n\
  •	Fleet management and Data analytics\n\
  •	IoT enablement PoC for consumer product line.\n\
  •	IoT enablement for manufacturing cell to increase productivity\n\
  ・Stock Market Trading analysis with Python ML (Time Series Data, Sentiment)\n\
  https://github.com/HajimeK/AITradeJapanStock/tree/main/Japan%20Stock \n\
  ・SAP ERP Basis 16 years (SAP NetWeaver certificate)\n\
  ・Programming - Python, Solidity, TypeScript(Node.js) (Java, C++, Assembler)\n\
  ・Soft Skills\n\
  •	Orchestrating and leading global team for service delivery\n\
  •	IT Consulting to requirements analysis, and IT service team launch\n\
  •	IT ISO-27001 security management system/operation consultant"
  constructor() { }

  ngOnInit(): void {
  }

}
