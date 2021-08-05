import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-experiences-blockchain',
  templateUrl: './profile-experiences-blockchain.component.html',
  styleUrls: ['./profile-experiences-blockchain.component.css']
})
export class ProfileExperiencesBlockchainComponent implements OnInit {
  experiences = [
    {name:"Blockchain applied Supply Chaing", description: "Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer.", url: "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_6_Supply_Chain"},
    {name:"Blockchian applied to Flight Insureance", description: "Decentralized App withvoting algorithm for flight insurance among passengers and flight companies", url: "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_FlightSurety"},
    {name:"Blockchain applied to NFT", description: "Smart Contract app to exchange items in OpenSea market place using NFT", url: "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_Capstone"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
