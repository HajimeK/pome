import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience, Tag } from './model';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesApiService {
  tags: Tag[];
  AIMLEx: Experience[];
  AzureEx: Experience[];
  IoTEx: Experience[];
  BlockchainEx: Experience[];


  constructor(private http: HttpClient) {
    this.tags = [{'id':1, 'tag': 'AIML'}, {'id':2, 'tag': 'Azure'}, {'id':3, 'tag': 'IoT'}, {'id':4, 'tag': 'Blockchain'}];
    this.AIMLEx = [
      {
        "id": 1,
        "title": "AutoML with Azure ML",
        "note": "build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.",
        "urle": "https://github.com/HajimeK/AzureML_Optimizing_a_Pipeline"
      },
      {
        "id": 1,
        "title": "Azure ML with real data",
        "note": "Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected larger than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.",
        "urle": "https://github.com/HajimeK/nd00333-capstone"
      },
      {
        "id": 1,
        "title": "Person Detection with Intel OpenVINO",
        "note": "Using SSD, Single Shot Multibox Detector, to detect people in real-time streaming video. Can operate both with Intel CPU embedded GPU and Intel USB VPU",
        "urle": "https://github.com/HajimeK/nd131-openvino-fundamentals-project-starter/blob/master/WRITEUP.md"
      },
      {
        "id": 1,
        "title": "Fleet IoT",
        "note": "Fleet solution packaging project targeting the Japanese market. Install in-vehicle devices and collect data from platforms. From on-site data collection, provided the scoring function of the driver's behavior data using ML methods (4 months)",
        "urle": "NA"
      },
      {
        "id": 1,
        "title": "AIoT, Anormaly Detection",
        "note": "Reducing the failure rate of trucks is critical in logictics business. A machine lerning model for predictive analytics.",
        "urle": "https://github.com/HajimeK/machine-learning/blob/master/projects/capstone/report/capstone.md"
      },
      {
        "id": 1,
        "title": "AIoT Streaming Analytics",
        "note": "Workshop to empower a partner ready for AIoT(AI+IoT) streaming analytics",
        "urle": "NA"
      },
      {
        "id": 1,
        "title": "MLOps with Azure ML",
        "note": "Deploy trained models to an end point what is consumable with REST API calls",
        "urle": "https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files"
      }];
    this.AzureEx = [
      {
        "id": 1,
        "title": "AutoML with Azure ML",
        "note": "build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.",
        "urle": "https://github.com/HajimeK/AzureML_Optimizing_a_Pipeline"
      },
      {
        "id": 1,
        "title": "Azure ML with real data",
        "note": "Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected larger than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.",
        "urle": "https://github.com/HajimeK/nd00333-capstone"
      },
      {
        "id": 1,
        "title": "Person Detection with Intel OpenVINO",
        "note": "Using SSD, Single Shot Multibox Detector, to detect people in real-time streaming video. Can operate both with Intel CPU embedded GPU and Intel USB VPU",
        "urle": "https://github.com/HajimeK/nd131-openvino-fundamentals-project-starter/blob/master/WRITEUP.md"
      },
      {
        "id": 1,
        "title": "MLOps with Azure ML",
        "note": "Deploy trained models to an end point what is consumable with REST API calls",
        "urle": "https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files"
      },
      {
        "id": 1,
        "title": "Azure Performance",
        "note": "Investigate Azure perfomance using Application Insights, Logs and etc, and autoscale when needed",
        "urle": "https://github.com/HajimeK/azure-performance-and-auto-scaling"
      },
      {
        "id": 1,
        "title": "Azure Performance VMMS autoscaling",
        "note": "Setup an auto-scaling for a VMSS",
        "urle": "https://github.com/HajimeK/azure-performance-and-auto-scaling/blob/master/subprojects/autoscaling-vmss/README.md"
      },
      {
        "id": 1,
        "title": "Azure Performance with Azure Kubernetes Cluster and Runbook",
        "note": "Create alerts to trigger auto-scaling on an AKS cluster and trigger a RunBook to execute",
        "urle": "https://github.com/HajimeK/azure-performance-and-auto-scaling/blob/master/subprojects/kubernetes-cluster/README.md"
      },
      {
        "id": 1,
        "title": "Migrating to Azure",
        "note": "Making application to work with cloud managed services, like Azure Functions, service bus queue messaging",
        "urle": "https://github.com/HajimeK/nd081-c3-Migrating-Non-Native-Cloud-Applications-project-starter"
      },
      {
        "id": 1,
        "title": "Azure Web App with REST & Cosmos DB backend",
        "note": "Azure Web App with REAT API withAzure Functions and Mongo DB",
        "urle": "https://github.com/HajimeK/nd081-c2-Building-and-deploying-cloud-native-applications-from-scratch-project-starter"
      },
      {
        "id": 1,
        "title": "CMS app on Azure with AD credential",
        "note": "CMS app with OAuth2 with Sign in with Microsoft using the msal library, along with app logging.",
        "urle": "https://github.com/HajimeK/nd081-c1-provisioning-microsoft-azure-vms-project-starter/blob/master/WRITEUP.md"
      }];
    this.IoTEx = [
      {
        "id": 1,
        "title": "Fleet IoT",
        "note": "Fleet solution packaging project targeting the Japanese market. Install in-vehicle devices and collect data from platforms. From on-site data collection, provided the scoring function of the driver's behavior data using ML methods (4 months)",
        "urle": "NA"
      },
      {
        "id": 1,
        "title": "AIoT, Anormaly Detection",
        "note": "Reducing the failure rate of trucks is critical in logictics business. A machine lerning model for predictive analytics.",
        "urle": "https://github.com/HajimeK/machine-learning/blob/master/projects/capstone/report/capstone.md"        },
      {
        "id": 1,
        "title": "AIoT Streaming Analytics",
        "note": "Workshop to empower a partner ready for AIoT(AI+IoT) streaming analytics",
        "urle": "NA"
      },
      {
        "id": 1,
        "title": "Consumer Project IoT",
        "note": "As an engineer in a PoC to make customer product ready for IoT. Technology lead in defining subsequent commercialization requirements (1.5 year)",
        "urle": "NA"
      }];
    this.BlockchainEx = [
      {
        "id": 1,
        "title": "Blockchain applied Supply Chaing",
        "note": "Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer.",
        "urle": "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_6_Supply_Chain"
      },
      {
        "id": 1,
        "title": "Blockchian applied to Flight Insureance",
        "note": "Decentralized App withvoting algorithm for flight insurance among passengers and flight companies",
        "urle": "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_FlightSurety"
      },
      {
        "id": 1,
        "title": "Blockchain applied to NFT",
        "note": "Smart Contract app to exchange items in OpenSea market place using NFT",
        "urle": "https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_Capstone"
      }];
  }

  getTags(): Tag[] {
    // API call
    return this.tags;
  }

  getExperiences(tag: string): Experience[] {
    if(tag === 'Blockchain') {
      return this.BlockchainEx;
    } else if(tag === 'Azure') {
      return this.AzureEx;
    } else if(tag === 'IoT') {
      return this.IoTEx;
    } else {
      return this.AIMLEx;
    }
  }
}
