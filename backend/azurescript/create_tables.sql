CREATE TABLE IF NOT EXISTS Skill (
    id INT PRIMARY KEY IDENTITY(1, 1),
    item VARCHAR(20) NOT NULL,
    description TEXT,
    level VARCHAR(20) NOT NULL,
);

INSERT INTO dbo.Skill (item, description, level) VALUES
    (
        'Machine Learning',
        'Shallow Machine Learning mainly with SKLearn',
        'intermediate'
    ),
    (
        'Deep Learning',
        'Deep Learning mainly with Keras or pyTorch',
        'intermediate'
    ),
    (
        'python',
        'Develop applicatiosn with python',
        'intermediate'
    ),
    (
        'solidity',
        'Implement smart contracts in ethereum',
        'intermediate'
    ),
    (
        'node.js',
        'Develop web applications and miscroservices',
        'beginner'
    ),
    (
        'java',
        'develop applications',
        'intermediate'
    ),
    (
        'c++',
        'develop applications',
        'intermediate'
    ),
    (
        'Solution Architect',
        'Design solutions with globally understadable architecture',
        'Senior'
    ),
    (
        'customer facing',
        'Establish good relationship with customers to accomplish project',
        'Expert'
    ),
    (
        'de-escalation',
        'Solve critical customer complaints to avoid churns',
        'Expert'
    );

CREATE TABLE Project (
    id INT PRIMARY KEY IDENTITY(1, 1),
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT NOT NULL,
);

INSERT INTO dbo.Project (name, description, url) VALUES
    ('AIoT Streaming Analytics','Workshop to empower a partner ready for AIoT(AI+IoT) streaming analytics','NA'),
    ('Consumer Project IoT','As an engineer in a PoC to make customer product ready for IoT. Technology lead in defining subsequent commercialization requirements (1.5 year)','NA'),
    ('Fleet IoT','Fleet solution packaging project targeting the Japanese market. Install in-vehicle devices and collect data from platforms. From on-site data collection, provided the scoring function of the driver''s behavior data using ML methods (4 months)','NA'),
    ('AutoML with Azure ML','build and optimize an Azure ML pipeline using the Python SDK and a provided Scikit-learn model. This model is then compared to an Azure AutoML run.','https://github.com/HajimeK/nd00333_AZMLND_Optimizing_a_Pipeline_in_Azure-Starter_Files'),
    ('MLOps with Azure ML','Deploy trained models to an end point what is consumable with REST API calls','https://github.com/HajimeK/nd00333_AZMLND_C2/tree/master/starter_files'),
    ('Azure ML with real data','Using an traditional census data in Machine Learning studies, here I have derived prediction models to find potential donors. If the income is expected largeer than 50K, we find the person as potential donors and put emphasis on the activity to ask for donations.','https://github.com/HajimeK/nd00333-capstone'),
    ('Azure Performance','Investigate Azure perfomance using Application Insights, Logs and etc, and autoscale when needed','https://github.com/HajimeK/nd081-c4-azure-performance-project-starter'),
    ('Migrating to Azure','Making application to work with cloud managed services, like Azure Functions, service bus queue messaging','https://github.com/HajimeK/nd081-c3-Migrating-Non-Native-Cloud-Applications-project-starter'),
    ('Azure Web App with REST & Cosmos DB backend','Azure Web App with REAT API withAzure Functions and Mongo DB','https://github.com/HajimeK/nd081-c2-Building-and-deploying-cloud-native-applications-from-scratch-project-starter'),
    ('CMS app on Azure with AD credential','CMS app with OAuth2 with Sign in with Microsoft using the msal library, along with app logging.','https://github.com/HajimeK/nd081-c1-provisioning-microsoft-azure-vms-project-starter/blob/master/WRITEUP.md'),
    ('Person Detection with Intel OpenVINO','Using SSD, Single Shot Multibox Detector, to detect people in real-time streaming video. Can operate both with Intel CPU embedded GPU and Intel USB VPU','https://github.com/HajimeK/nd131-openvino-fundamentals-project-starter/blob/master/WRITEUP.md'),
    ('AIoT, Anormaly Detection','Reducing the failure rate of trucks is critical in logictics business. That directly impacts profitability and customer satisfaction. Until now, logistics companies rely on regular maintenance to prevent the occurrence of failures. However, since the utilization rate of trucks exceeds the days what has been assumed to be covered by periodic maintenance, the percentage of post-maintenance caused by failures increasing, which has been a problem for some time.','https://github.com/HajimeK/machine-learning/blob/master/projects/capstone/report/capstone.md'),
    ('Blockchain applied Supply Chaing','Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer.','https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_6_Supply_Chain'),
    ('Blockchian applied to Flight Insureance','Decentralized App withvoting algorithm for flight insurance among passengers and flight companies','https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_FlightSurety'),
    ('Blockchain applied to NFT','Smart Contract app to exchange items in OpenSea market place using NFT','https://github.com/HajimeK/BlockchainDevND/tree/master/projects/project_Capstone');

CREATE TABLE Skill_Project (
    id INT NOT NULL IDENTITY(1, 1),
    skill_id int FOREIGN KEY REFERENCES Skill(id),
    project_id int FOREIGN KEY REFERENCES Project(id)
);

INSERT INTO dbo.Skill_Project VALUES
    (9,1),
    (9,3),
    (9,4),
    (9,5),
    (9,6),
    (9,12),
    (10,11),
    (1,1),
    (1,2),
    (1,3),
    (1,4),
    (1,5),
    (1,6),
    (1,7),
    (1,8),
    (1,9),
    (1,10),
    (1,11),
    (1,12),
    (2,13),
    (2,14),
    (2,15)

CREATE TABLE IF NOTE EXISTS Experience (
    id INT PRIMARY KEY IDENTITY(1, 1),
    name VARCHAR(128) NOT NULL,
    from DATE,
    to DATE,
    role VARCHAR(64),
    statement TEXT,
    fk_project_id int FOREIGN KEY REFERENCES Project(id)
);

SELECT Skill.id, Skill.item, Skill.level, Skill.description, Project.name, Project.description, Project.url
FROM Skill
LEFT JOIN Skill_Project ON Skill.id = Skill_Project.skill_id
LEFT JOIN Project ON Skill_Project.project_id = Project.id

SELECT Experience.name, Experience.from, Experience.to, Experience.role, Project.name, Project.url
FROM Experience, Project
WHERE Experience.project_id = Project.id
