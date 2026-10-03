import { Content } from "./types";

const en: Content = {
  langName: "English",
  inputLabel: "Type a command, for example help",
  usage: "Usage:",
  welcome: {
    tagline: "Welcome to my terminal portfolio.",
    role: "Senior DevOps | SRE | Platform Engineer",
    help: {
      pre: "For a list of available commands, type `",
      cmd: "help",
      post: "`.",
    },
    menu: "Not a terminal person? Open the ☰ menu at the top right.",
    lang: { pre: "¿Prefieres español? Escribe `", cmd: "lang es", post: "`." },
  },
  about: {
    hi: ["Hi, my name is ", "!"],
    role: [
      "I'm a ",
      "Senior DevOps / SRE / Platform Engineer",
      " based in Málaga, Spain.",
    ],
    paragraphs: [
      "10+ years in infrastructure, fully remote since 2020 for companies in the US and Latin America. I build and run the platform layer product teams ship on: AWS provisioned with Terraform, workloads on Kubernetes and ECS, and GitOps delivery that promotes the same artifact from staging to production.",
      "Much of that work was in regulated fintech and healthcare (Central Bank of Panama, HIPAA, SOC 2), so security lives inside the pipeline. Lately I also extend these platforms to host GenAI workloads on AWS.",
      "Open to remote roles.",
    ],
  },
  location: ["Location", "Málaga, Spain (open to remote)"],
  experience: [
    {
      role: "Senior DevOps Engineer",
      company: "Xmartlabs",
      period: "Oct 2021 - Present · Remote (US)",
      highlight:
        "EKS & ECS across client platforms at 99.9% uptime · CI/CD 15 → 5 min · detection & resolution time -90% · HIPAA & SOC 2",
    },
    {
      role: "Senior DevOps Engineer",
      company: "Zinli",
      period: "Jun 2020 - Nov 2021 · Remote (Panama)",
      highlight:
        "Fintech with 1.2M+ users on 90% serverless AWS · Central Bank of Panama compliance, zero high/critical vulns",
    },
    {
      role: "DevOps / SRE Engineer",
      company: "Naranja X",
      period: "Jun 2019 - Jun 2020 · Argentina",
      highlight:
        "Fintech with 9.5M+ users · owned releases, moved ~8 teams to daily production deploys on EKS",
    },
    {
      role: "Cloud Engineer",
      company: "Accenture",
      period: "Jun 2018 - Jun 2019 · Argentina",
      highlight:
        "AWS & Azure alongside on-prem Linux and Windows · Docker, Kubernetes, Big Data platforms",
    },
    {
      role: "Systems Administrator",
      company: "Sonda",
      period: "Mar 2017 - Jun 2018 · Argentina",
      highlight:
        "Service desk to server admin · Red Hat, Windows Server, Active Directory, Nagios",
    },
    {
      role: "Systems Administrator",
      company: "Le Desk S.A.",
      period: "Aug 2016 - Feb 2017 · Argentina",
      highlight:
        "On-prem and AWS infrastructure end to end · Linux, Windows, MySQL, mail & web servers",
    },
  ],
  skills: [
    {
      category: "Cloud",
      items: [
        "AWS (EC2, ECS, EKS, Lambda, VPC, RDS, DynamoDB, S3, Organizations)",
        "GCP",
        "Azure",
      ],
    },
    {
      category: "Containers",
      items: ["Kubernetes (EKS)", "Helm", "Docker", "ECS", "Fargate"],
    },
    {
      category: "IaC",
      items: [
        "Terraform",
        "Pulumi",
        "CloudFormation",
        "AWS CDK",
        "Serverless Framework",
        "Ansible",
      ],
    },
    {
      category: "CI/CD & GitOps",
      items: [
        "GitHub Actions",
        "GitLab CI",
        "Jenkins",
        "Bitbucket Pipelines",
        "Argo CD",
        "FluxCD",
      ],
    },
    {
      category: "Observability",
      items: [
        "Prometheus",
        "Grafana",
        "Loki",
        "OpenTelemetry",
        "Datadog",
        "CloudWatch",
        "ELK",
      ],
    },
    {
      category: "Security",
      items: [
        "IAM least privilege",
        "KMS",
        "Secrets Manager",
        "WAF",
        "GuardDuty",
        "Prisma Cloud",
        "checkov",
        "HIPAA",
        "SOC 2",
      ],
    },
    {
      category: "Linux & Systems",
      items: ["Red Hat", "Ubuntu", "Windows Server", "Nginx", "Apache"],
    },
    {
      category: "Scripting",
      items: ["Bash", "Python"],
    },
    {
      category: "Data",
      items: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "Kafka"],
    },
    {
      category: "AI Infra",
      items: ["Amazon Bedrock", "RAG", "pgvector", "MLflow", "Claude Code"],
    },
    {
      category: "Certs",
      items: [
        "AWS Solutions Architect - Associate",
        "Claude Certified Architect - Foundations (2026)",
      ],
    },
  ],
  projects: {
    desc: {
      "k8s-gitops-slo-platform":
        "Kubernetes on kind with Argo CD GitOps and Sloth SLOs, exercised by six reproducible incidents that CI runs on fresh clusters, timing detection and recovery.",
      "aws-serverless-golden-path":
        "Template that generates a serverless AWS service, verifies it against LocalStack in CI with no cloud credentials, and opens cruft update PRs to keep generated services current.",
      "localstack-ephemeral-infra":
        "Modular Terraform that stands up ephemeral environments on LocalStack inside CI, with a parity log of every place the emulator diverged from real AWS.",
      "aws-ecs-fargate-platform":
        "ECS Fargate platform with separate state per environment and one image promoted from staging to prod, documented with decision records and runbooks.",
    },
    more: "More on",
  },
  help: {
    desc: {
      about: "about Leomar Moncada",
      clear: "clear the terminal",
      contact: "how to reach me",
      experience: "my work experience",
      help: "check available commands",
      history: "view command history",
      lang: "switch language (en | es)",
      projects: "things I've built",
      skills: "my DevOps stack & certs",
      welcome: "display hero section",
    },
    keys: [
      ["Tab or Ctrl + i", "autocompletes the command"],
      ["Up Arrow", "go back to previous command"],
      ["Ctrl + l", "clear the terminal"],
    ],
    eggs: "psst... it's a DevOps terminal. Some familiar commands might just work.",
  },
  lang: {
    current: "Current language: English",
    usage: "Usage: lang [en | es]",
    changed: "Language set to English",
  },
  menu: {
    open: "☰ menu",
    close: "✕ menu",
    openLabel: "Show clickable command menu",
    closeLabel: "Hide clickable command menu",
    switchLang: "español",
  },
  summary: {
    label: "Profile summary",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  eggs: {
    sudo: "visitor is not in the sudoers file. This incident will be reported.",
    whoami: {
      pre: "visitor. The real question is who Leomar is: try `",
      cmd: "about",
      post: "`.",
    },
    pods: "All systems operational. Uptime: 99.9%.",
    kubectlError: 'error: unknown command. Try "kubectl get pods".',
    plan: {
      pre: "Run `",
      cmd: "terraform apply",
      post: "` to provision.",
    },
    apply: { pre: "Next step: type `", cmd: "contact", post: "`." },
    terraformUsage: "Usage: terraform [plan | apply]",
    rm: "Nice try. Production is protected by least-privilege IAM.",
    exit: { pre: "Leaving so soon? Try `", cmd: "contact", post: "` first." },
  },
};

export default en;
