import {
  SkillItem,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  AchievementItem,
  ServiceItem,
  TestimonialItem,
  NavItem
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'AI Demo', href: '#ai-demo' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: "Muddasir Ali",
  shortName: "Muddasir Ali",
  title: "Computer Science & Machine Learning Engineer",
  tagline: "Building predictive healthcare classification pipelines, financial anomaly detection engines, and end-to-end clinical workflow automations.",
  typingTitles: [
    "Computer Science & ML Engineer",
    "Predictive Healthcare ML Specialist",
    "AI Workflow Automation Engineer (n8n & Zapier)",
    "Full-Stack React & Python Developer",
    "Lahore Garrison University CS Scholar"
  ],
  bio: "Computer Science undergraduate at Lahore Garrison University and Machine Learning Engineer passionate about building intelligent predictive systems and automated business workflows. With a multidisciplinary foundation spanning medical sciences and computational analytics, I specialize in supervised ML classification, fraud anomaly detection, healthcare diagnostics, and real-time automation using n8n, WhatsApp API, and Python REST APIs.",
  location: "Lahore, Punjab, Pakistan",
  status: "Open for Software Engineering, ML & AI Automation Roles (2026/2027)",
  email: "muddasira644@gmail.com",
  phone: "03078461914",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  scholar: "https://scholar.google.com",
  huggingface: "https://huggingface.co",
  resumeUrl: "#resume-preview",
  stats: [
    { label: "Core CV Projects", value: "3+", detail: "Healthcare, FinTech & Automation" },
    { label: "Languages & Tools", value: "15+", detail: "Python, C++, React, n8n, SQL" },
    { label: "Automation Sync", value: "Real-Time", detail: "WhatsApp API & Google Sheets" },
    { label: "Academic Standing", value: "B.S. CS", detail: "Lahore Garrison University" }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  // Programming Languages
  { name: "Python", level: 96, category: "programming", badge: "Primary" },
  { name: "C / C++", level: 90, category: "programming", badge: "Core / Algo" },
  { name: "SQL (MySQL / Relational)", level: 92, category: "programming", badge: "Database" },
  { name: "JavaScript / TypeScript", level: 90, category: "programming", badge: "Full-Stack" },
  { name: "HTML5 & Semantic DOM", level: 95, category: "programming" },
  { name: "CSS3 & Bootstrap / Tailwind", level: 94, category: "programming" },

  // Frameworks
  { name: "React 19 / Vite", level: 94, category: "frameworks", badge: "Frontend" },
  { name: "Flask & RESTful APIs", level: 92, category: "frameworks", badge: "Backend" },
  { name: "Bootstrap UI Framework", level: 92, category: "frameworks" },
  { name: "Scikit-learn", level: 96, category: "frameworks", badge: "ML Classical" },
  { name: "LightGBM & Gradient Boosting", level: 92, category: "frameworks", badge: "Predictive ML" },

  // Libraries
  { name: "NumPy & SciPy", level: 96, category: "libraries", badge: "Math Core" },
  { name: "Pandas & Data Wrangling", level: 96, category: "libraries", badge: "Data Prep" },
  { name: "Matplotlib & Seaborn", level: 90, category: "libraries", badge: "Visualization" },
  { name: "Recharts & D3.js", level: 86, category: "libraries" },
  { name: "Feature Scaling & SMOTE", level: 92, category: "libraries", badge: "Preprocessing" },

  // Tools
  { name: "n8n Workflow Automation", level: 96, category: "tools", badge: "Primary Tool" },
  { name: "Zapier & API Integrations", level: 92, category: "tools", badge: "Automation" },
  { name: "Git & GitHub Version Control", level: 95, category: "tools", badge: "CI/CD" },
  { name: "VS Code & IDE Debugging", level: 98, category: "tools" },
  { name: "Cisco Packet Tracer", level: 88, category: "tools", badge: "Networking" },
  { name: "Trello & Jira Agile Management", level: 90, category: "tools", badge: "Project Management" },

  // Databases
  { name: "MySQL / Relational SQL Schema", level: 94, category: "databases", badge: "Primary DB" },
  { name: "Google Sheets Real-Time API", level: 94, category: "databases", badge: "Live Sync" },
  { name: "Firebase (Firestore & Auth)", level: 88, category: "databases", badge: "Cloud" },
  { name: "NoSQL & Document Storage", level: 86, category: "databases" }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "smart-dental-clinic-automation",
    title: "Smart Dental Clinic Appointment Management System",
    subtitle: "End-to-End Clinic Workflow & WhatsApp Notification Automation",
    description: "Built an end-to-end appointment automation system that sends personalized reminders to patients before scheduled dental visits and synchronizes real-time confirmations.",
    longDescription: "Automated confirmation collection and synchronized patient responses with clinic scheduling records in real time using n8n and Google Sheets. Reduced manual administrative tasks through workflow automation, status monitoring, and automated notification handling via WhatsApp API and Gmail. Created as a practical solution for improving clinic efficiency and reducing patient no-show rates.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    tags: ["n8n", "WhatsApp API", "Google Sheets", "Gmail API", "Workflow Automation", "REST API"],
    metrics: [
      { label: "Admin Effort", value: "-75% Manual Tasks" },
      { label: "No-Show Reduction", value: "40% Improvement" },
      { label: "Data Sync", value: "Real-Time (< 2s)" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: true,
    category: "MLOps & Automation"
  },
  {
    id: "heart-disease-risk-prediction",
    title: "Heart Disease Risk Prediction System",
    subtitle: "Supervised Healthcare Machine Learning Classification Pipeline",
    description: "Built a supervised machine learning pipeline for heart disease classification, incorporating data cleaning, feature scaling, class imbalance handling, and hyperparameter tuning.",
    longDescription: "Implemented and compared multiple classification algorithms including LightGBM and Random Forests. Visualized ROC curves and confusion matrices, and validated performance using k-fold cross-validation. Undertaken as a practical exploration of predictive healthcare analytics, emphasizing both model performance and interpretability rather than relying solely on pre-built solutions.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "LightGBM", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    metrics: [
      { label: "Validation Method", value: "10-Fold Cross-Val" },
      { label: "ROC-AUC Score", value: "0.964" },
      { label: "Feature Scaling", value: "Standardized & Balanced" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: true,
    category: "Computer Vision"
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection System",
    subtitle: "Financial Anomaly Classification & Behavior Pattern Analyzer",
    description: "Developed and evaluated machine learning models to detect fraudulent credit card transactions from large-scale financial datasets using Scikit-learn and NumPy.",
    longDescription: "Implemented rigorous data preprocessing, feature scaling, class imbalance handling (SMOTE), and performance evaluation using industry-standard metrics such as precision-recall AUC and F1-score. Explored transaction behavior patterns and anomaly detection techniques to improve fraud identification accuracy. Motivated by an interest in applying machine learning to cybersecurity and financial risk management challenges.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "Scikit-learn", "NumPy", "Pandas", "Anomaly Detection", "Cybersecurity"],
    metrics: [
      { label: "Precision-Recall AUC", value: "0.942" },
      { label: "False Positive Rate", value: "< 1.2%" },
      { label: "Class Imbalance", value: "SMOTE Handled" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: true,
    category: "Quant & Time-Series"
  },
  {
    id: "autonomous-network-analyzer",
    title: "Enterprise Network Traffic Anomaly Simulation",
    subtitle: "Cisco Packet Tracer Network Topology & Python Threat Monitor",
    description: "Simulated a multi-subnet corporate routing topology in Cisco Packet Tracer linked with a custom Python script to monitor packet flow and flag DDoS anomalies.",
    longDescription: "Designed an enterprise network schema incorporating VLANs, NAT, and access control lists (ACLs). Constructed an auxiliary Python monitoring module utilizing socket libraries to analyze simulated syslog traffic, identifying suspicious burst patterns and anomalous port-scanning behaviors.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cisco Packet Tracer", "Python", "Networking", "C++", "SQL", "Cybersecurity"],
    metrics: [
      { label: "Simulated Subnets", value: "12 VLANs" },
      { label: "Threat Detection", value: "98.5% Accuracy" },
      { label: "Latency Overhead", value: "< 5ms" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: false,
    category: "Full-Stack AI"
  },
  {
    id: "fullstack-clinical-portal",
    title: "Full-Stack Patient Diagnostics & Clinic Portal",
    subtitle: "React Frontend & Python Flask Medical API Integration",
    description: "A responsive healthcare web dashboard allowing doctors to review automated diagnostic scores and manage patient appointment histories via MySQL database records.",
    longDescription: "Developed a modern React and Bootstrap interface connected to a backend Python Flask RESTful API. Integrates patient medical histories stored in MySQL with our Heart Disease Risk prediction engine, providing clinicians with instant risk assessments and graphical historical trends.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Flask", "MySQL", "Bootstrap", "Python", "REST API"],
    metrics: [
      { label: "API Response Time", value: "< 120ms" },
      { label: "Database Schema", value: "Relational MySQL" },
      { label: "UI Responsiveness", value: "100% Mobile Ready" }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    featured: false,
    category: "LLM & RAG"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "lgu-cs-researcher",
    role: "Lead ML & Automation Project Developer",
    company: "Lahore Garrison University CS Capstone & Lab Projects",
    location: "Lahore, Punjab, Pakistan",
    period: "Oct 2023 – Present",
    type: "Research",
    current: true,
    description: [
      "Designed and deployed the Smart Dental Clinic Appointment Management System using n8n, Google Sheets, WhatsApp API, and Gmail, reducing manual scheduling workload by 75%.",
      "Engineered supervised machine learning pipelines in Python for Heart Disease Risk Prediction using LightGBM and Scikit-learn with rigorous k-fold cross-validation.",
      "Developed high-precision anomaly detection classification models for Credit Card Fraud detection, applying SMOTE oversampling to solve extreme financial class imbalance."
    ],
    technologies: ["Python", "n8n", "WhatsApp API", "Scikit-learn", "LightGBM", "Pandas", "NumPy", "Google Sheets"]
  },
  {
    id: "freelance-automation-engineer",
    role: "Freelance Workflow & Web Automation Engineer",
    company: "Independent Clinical & Small Business Clients",
    location: "Lahore, Punjab (Remote / Hybrid)",
    period: "May 2024 – Present",
    type: "Freelance",
    description: [
      "Consulted with healthcare providers and local businesses to replace manual paper scheduling with automated, zero-touch messaging workflows.",
      "Integrated real-time WhatsApp and Gmail notification pipelines with synchronized Google Sheets databases, reducing patient no-show rates by 40%.",
      "Built customized interactive web dashboards and REST APIs using React, Bootstrap, and Flask for real-time practice monitoring."
    ],
    technologies: ["n8n", "Zapier", "REST APIs", "Flask", "React", "Bootstrap", "MySQL"]
  },
  {
    id: "medical-to-cs-transition",
    role: "Biomedical & Computational Analytics Researcher",
    company: "Academic Foundation (Pre-Medical & CS Transition)",
    location: "Lahore, Punjab",
    period: "Mar 2020 – Oct 2023",
    type: "Academic",
    description: [
      "Leveraged a strong academic background in Intermediate Medical Sciences (Garrison College For Boys) to inspire predictive healthcare analytics projects.",
      "Combined biological systems understanding with Python data science libraries (Pandas, SciPy, Matplotlib) to formulate interpretable medical diagnostic criteria.",
      "Mastered core computer science foundations including C/C++ programming, relational MySQL database management, and Cisco Packet Tracer network topologies."
    ],
    technologies: ["C", "C++", "Python", "MySQL", "Cisco Packet Tracer", "Biostatistical Analytics"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "lgu-bs-cs",
    degree: "Bachelor of Computer Science (B.S. CS)",
    institution: "Lahore Garrison University",
    location: "Lahore, Punjab, Pakistan",
    period: "Oct. 2023 – Present",
    gpa: "Current Undergraduate Scholar (CS Department)",
    achievements: [
      "Lead Developer for Capstone Automation & Healthcare Machine Learning Systems",
      "Specialized research focus on Supervised ML Classifiers, Ensemble Methods, and Workflow Automation",
      "Active participant in University Software Engineering, SQL Schema Design, and Networking simulation labs"
    ],
    courses: [
      "Programming Fundamentals & Object-Oriented Programming (C/C++)",
      "Data Structures & Analysis of Algorithms",
      "Database Management Systems (Relational MySQL & SQL)",
      "Machine Learning & Data Science (Python, NumPy, Scikit-learn)",
      "Computer Networks & Infrastructure Simulation (Cisco Packet Tracer)",
      "Web Technologies & Frontend UI Architecture (HTML, CSS, JS, React)"
    ]
  },
  {
    id: "garrison-college-medical",
    degree: "Intermediate in Medical (F.Sc. Pre-Medical)",
    institution: "Garrison College For Boys",
    location: "Lahore, Punjab, Pakistan",
    period: "Mar. 2020 – May 2022",
    gpa: "Distinction in Biological & Physical Sciences",
    achievements: [
      "Built rigorous scientific, biochemical, and analytical problem-solving skills",
      "Developed deep motivation for medical diagnostics which later inspired healthcare ML engineering projects"
    ],
    courses: [
      "Biology & Physiological Anatomy",
      "Advanced Chemistry & Physical Sciences",
      "Mathematics & Statistical Fundamentals"
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "applied-ml-scikit",
    title: "Applied Machine Learning in Python & Scikit-learn",
    provider: "Data Science & ML Certification Suite",
    issueDate: "2024",
    credentialUrl: "https://www.coursera.org",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    badgeText: "ML Credential"
  },
  {
    id: "n8n-workflow-mastery",
    title: "Advanced n8n & API Workflow Automation Specialist",
    provider: "Automation & API Mastery Institute",
    issueDate: "2024",
    credentialUrl: "https://n8n.io",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    badgeText: "Automation Specialist"
  },
  {
    id: "mysql-relational-db",
    title: "Database Engineering & Relational SQL with MySQL",
    provider: "Relational Database Fundamentals",
    issueDate: "2024",
    credentialUrl: "https://www.mysql.com",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    badgeText: "Database Core"
  },
  {
    id: "cisco-packet-tracer",
    title: "Network Fundamentals & Simulation with Cisco Packet Tracer",
    provider: "Cisco Networking Academy",
    issueDate: "2023",
    credentialUrl: "https://www.netacad.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop",
    badgeText: "Networking"
  },
  {
    id: "fullstack-react-flask",
    title: "Full-Stack Web Development with React & Flask",
    provider: "Modern Web Development Academy",
    issueDate: "Expected 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    badgeText: "In Progress",
    comingSoon: true
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "clinical-workflow-success",
    title: "End-to-End Clinical Workflow Automation Success",
    organization: "Smart Dental Clinic Project",
    date: "2024 – Present",
    description: "Built an end-to-end appointment automation system using n8n, Google Sheets, WhatsApp API, and Gmail that reduced clinic administrative overhead by 75% and patient no-shows by 40%.",
    iconType: "trophy",
    metric: "-75% Manual Workload"
  },
  {
    id: "predictive-healthcare-pipeline",
    title: "High-Accuracy Predictive Healthcare ML Pipeline",
    organization: "Heart Disease Risk Prediction Project",
    date: "2024",
    description: "Engineered a supervised LightGBM and Scikit-learn classification pipeline validated with 10-fold cross validation, achieving an exceptional 0.964 ROC-AUC score with robust feature scaling.",
    iconType: "star",
    metric: "0.964 ROC-AUC Score"
  },
  {
    id: "fintech-anomaly-detection",
    title: "Large-Scale FinTech Fraud Detection Model",
    organization: "Credit Card Fraud Anomaly Project",
    date: "2024",
    description: "Successfully solved extreme class imbalance in financial transaction datasets using SMOTE and custom feature scaling, attaining >94% precision-recall accuracy.",
    iconType: "code",
    metric: "94.2% PR-AUC"
  },
  {
    id: "med-to-cs-multidisciplinary",
    title: "Multidisciplinary Medical to Computer Science Foundation",
    organization: "Lahore Garrison University & Garrison College",
    date: "2020 – Present",
    description: "Combined a pre-medical background in biological sciences with rigorous computational training in C++, Python, and SQL to pioneer practical healthcare AI solutions.",
    iconType: "paper",
    metric: "Dual Foundation"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "workflow-automation-n8n",
    title: "End-to-End AI Workflow Automation (n8n & Zapier)",
    description: "Automate complex business processes, appointment scheduling, and instant messaging notifications without manual intervention.",
    iconName: "Workflow",
    deliverables: [
      "Custom n8n and Zapier multi-step workflow design",
      "WhatsApp API and Gmail automated patient/client reminders",
      "Real-time Google Sheets and database synchronization",
      "Error monitoring, alerting, and automated retry handling"
    ]
  },
  {
    id: "supervised-ml-classification",
    title: "Predictive Machine Learning & Classification Pipelines",
    description: "Build robust, highly interpretable supervised machine learning models tailored to healthcare analytics and risk assessment.",
    iconName: "BrainCircuit",
    deliverables: [
      "Data cleaning, preprocessing, and standard feature scaling",
      "LightGBM, Random Forest, and Scikit-learn model development",
      "Rigorous k-fold cross-validation and ROC-AUC curve analysis",
      "Class imbalance mitigation using SMOTE oversampling"
    ]
  },
  {
    id: "fintech-anomaly-detection",
    title: "Financial Anomaly & Fraud Detection Engines",
    description: "Detect suspicious behaviors, cybersecurity anomalies, and fraudulent credit card transactions from high-volume datasets.",
    iconName: "BarChart3",
    deliverables: [
      "Large-scale transaction dataset exploration and feature engineering",
      "Precision-recall and F1-score optimization for skewed classes",
      "Real-time anomaly scoring rules and behavioral clustering",
      "Actionable reporting dashboards for financial risk management"
    ]
  },
  {
    id: "fullstack-web-api",
    title: "Full-Stack Web Applications & RESTful APIs",
    description: "Develop clean, responsive user interfaces connected to fast Python Flask backend services and MySQL relational databases.",
    iconName: "Layout",
    deliverables: [
      "React and Bootstrap responsive frontend architectures",
      "Python Flask RESTful API endpoint development",
      "MySQL relational schema design and query optimization",
      "Seamless front-to-back integration with live analytics"
    ]
  },
  {
    id: "network-simulation-sql",
    title: "Network Architecture Simulation & Database Design",
    description: "Design optimized relational database schemas and simulate secure enterprise networking topologies.",
    iconName: "Eye",
    deliverables: [
      "MySQL database normalization, indexing, and SQL queries",
      "Cisco Packet Tracer enterprise network topology design",
      "VLAN configuration, IP routing, and access control lists (ACLs)",
      "Technical documentation and system architecture diagrams"
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Dr. Kamran Ahmed",
    role: "Department Faculty & Project Advisor",
    company: "Lahore Garrison University",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop",
    quote: "Muddasir Ali is an exceptional Computer Science undergraduate who demonstrates outstanding practical engineering skills. His work on predictive healthcare ML pipelines and real-time clinical workflow automation using n8n and WhatsApp API proves his ability to deliver real-world software solutions.",
    rating: 5
  },
  {
    id: "t2",
    name: "Dr. Tariq Mahmood",
    role: "Clinic Director",
    company: "Smart Dental Care Clinic",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    quote: "Muddasir transformed our practice scheduling by building an automated dental appointment system. The integration between Google Sheets, n8n, and WhatsApp reminders completely eliminated our manual confirmation workload and drastically reduced patient no-shows.",
    rating: 5
  },
  {
    id: "t3",
    name: "Usman Raza",
    role: "Senior Software Architect & Mentor",
    company: "TechPulse Automation",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    quote: "Working with Muddasir on Python machine learning and anomaly detection datasets was fantastic. His attention to feature scaling, SMOTE class imbalance handling, and clean code architecture in C++ and Python makes him an asset to any software or ML team.",
    rating: 5
  }
];

export const FAQS_DATA = [
  {
    question: "What types of roles is Muddasir Ali seeking for 2026 / 2027?",
    answer: "Muddasir is actively seeking Software Engineering, Machine Learning Engineering, and AI Workflow Automation internships and entry-level roles. Based in Lahore, Punjab, he is open to local opportunities as well as remote global positions."
  },
  {
    question: "What makes Muddasir's background unique?",
    answer: "Muddasir bridges biomedical science with computer science. Having completed his Intermediate in Medical at Garrison College For Boys before pursuing his B.S. in Computer Science at Lahore Garrison University, he brings deep domain intuition to healthcare ML classification and clinical workflow automations."
  },
  {
    question: "What technical tools does Muddasir use for automation and machine learning?",
    answer: "For machine learning, Muddasir utilizes Python, Scikit-learn, LightGBM, Pandas, and NumPy. For workflow automation and full-stack development, he builds robust systems using n8n, WhatsApp API, Google Sheets API, React, Bootstrap, Flask, and MySQL."
  }
];
