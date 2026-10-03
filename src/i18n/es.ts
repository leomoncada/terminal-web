import { Content } from "./types";

const es: Content = {
  langName: "español",
  inputLabel: "Escribe un comando, por ejemplo help",
  usage: "Uso:",
  welcome: {
    tagline: "Bienvenido a mi portfolio en terminal.",
    role: "Senior DevOps | SRE | Platform Engineer",
    help: {
      pre: "Para ver los comandos disponibles, escribe `",
      cmd: "help",
      post: "`.",
    },
    menu: "¿No te van las terminales? Abre el ☰ menú arriba a la derecha.",
    lang: { pre: "Prefer English? Type `", cmd: "lang en", post: "`." },
  },
  about: {
    hi: ["¡Hola! Me llamo ", "."],
    role: [
      "Soy ",
      "Ingeniero Senior DevOps / SRE / Plataforma",
      ", con base en Málaga, España.",
    ],
    paragraphs: [
      "Más de 10 años en infraestructura, en remoto desde 2020 para empresas de Estados Unidos y Latinoamérica. Construyo y opero la capa de plataforma sobre la que despliegan los equipos de producto: AWS aprovisionado con Terraform, cargas en Kubernetes y ECS, y entrega GitOps que promueve el mismo artefacto de staging a producción.",
      "Buena parte de ese trabajo fue en fintech y salud reguladas (Banco Central de Panamá, HIPAA, SOC 2), así que la seguridad vive dentro del pipeline. Últimamente también extiendo estas plataformas para alojar cargas de GenAI en AWS.",
      "Abierto a posiciones en remoto.",
    ],
  },
  location: ["Ubicación", "Málaga, España (abierto a remoto)"],
  experience: [
    {
      role: "Ingeniero Senior DevOps",
      company: "Xmartlabs",
      period: "Oct 2021 - Actualidad · Remoto (EE. UU.)",
      highlight:
        "EKS y ECS en plataformas de clientes con 99.9% de disponibilidad · CI/CD 15 → 5 min · detección y resolución -90% · HIPAA y SOC 2",
    },
    {
      role: "Ingeniero Senior DevOps",
      company: "Zinli",
      period: "Jun 2020 - Nov 2021 · Remoto (Panamá)",
      highlight:
        "Fintech con más de 1,2M de usuarios sobre AWS 90% serverless · cumplimiento del Banco Central de Panamá, cero vulnerabilidades altas o críticas",
    },
    {
      role: "Ingeniero DevOps / SRE",
      company: "Naranja X",
      period: "Jun 2019 - Jun 2020 · Argentina",
      highlight:
        "Fintech con más de 9,5M de usuarios · responsable de releases, llevé a ~8 equipos a deploys diarios a producción sobre EKS",
    },
    {
      role: "Ingeniero Cloud",
      company: "Accenture",
      period: "Jun 2018 - Jun 2019 · Argentina",
      highlight:
        "AWS y Azure junto a Linux y Windows on-premise · Docker, Kubernetes, plataformas de Big Data",
    },
    {
      role: "Administrador de Sistemas",
      company: "Sonda",
      period: "Mar 2017 - Jun 2018 · Argentina",
      highlight:
        "De mesa de ayuda a administrador de servidores · Red Hat, Windows Server, Active Directory, Nagios",
    },
    {
      role: "Administrador de Sistemas",
      company: "Le Desk S.A.",
      period: "Ago 2016 - Feb 2017 · Argentina",
      highlight:
        "Infraestructura on-premise y AWS de extremo a extremo · Linux, Windows, MySQL, servidores de correo y web",
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
      category: "Contenedores",
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
      category: "CI/CD y GitOps",
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
      category: "Observabilidad",
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
      category: "Seguridad",
      items: [
        "IAM de mínimo privilegio",
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
      category: "Linux y Sistemas",
      items: ["Red Hat", "Ubuntu", "Windows Server", "Nginx", "Apache"],
    },
    {
      category: "Scripting",
      items: ["Bash", "Python"],
    },
    {
      category: "Datos",
      items: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "Kafka"],
    },
    {
      category: "Infra de IA",
      items: ["Amazon Bedrock", "RAG", "pgvector", "MLflow", "Claude Code"],
    },
    {
      category: "Certificaciones",
      items: [
        "AWS Solutions Architect - Associate",
        "Claude Certified Architect - Foundations (2026)",
      ],
    },
  ],
  projects: {
    desc: {
      "k8s-gitops-slo-platform":
        "Kubernetes en kind con GitOps (Argo CD) y SLOs (Sloth), puesto a prueba con seis incidentes reproducibles que el CI corre en clusters nuevos, midiendo detección y recuperación.",
      "aws-serverless-golden-path":
        "Plantilla que genera un servicio serverless en AWS, lo verifica contra LocalStack en CI sin credenciales cloud y abre PRs de actualización con cruft para mantener al día los servicios generados.",
      "localstack-ephemeral-infra":
        "Terraform modular que levanta entornos efímeros en LocalStack dentro de CI, con un registro de paridad de cada punto en que el emulador se apartó de AWS real.",
      "aws-ecs-fargate-platform":
        "Plataforma ECS Fargate con estado separado por entorno y una misma imagen promovida de staging a prod, documentada con registros de decisiones y runbooks.",
    },
    more: "Más en",
  },
  help: {
    desc: {
      about: "sobre Leomar Moncada",
      clear: "limpia la terminal",
      contact: "cómo contactarme",
      experience: "mi experiencia laboral",
      help: "lista los comandos disponibles",
      history: "historial de comandos",
      lang: "cambia el idioma (en | es)",
      projects: "proyectos que he construido",
      skills: "mi stack DevOps y certificaciones",
      welcome: "muestra la bienvenida",
    },
    keys: [
      ["Tab o Ctrl + i", "autocompleta el comando"],
      ["Flecha arriba", "vuelve al comando anterior"],
      ["Ctrl + l", "limpia la terminal"],
    ],
    eggs: "psst... es una terminal DevOps. Algunos comandos conocidos podrían funcionar.",
  },
  lang: {
    current: "Idioma actual: español",
    usage: "Uso: lang [en | es]",
    changed: "Idioma cambiado a español",
  },
  menu: {
    open: "☰ menú",
    close: "✕ menú",
    openLabel: "Mostrar menú de comandos clicables",
    closeLabel: "Ocultar menú de comandos clicables",
    switchLang: "english",
  },
  summary: {
    label: "Resumen del perfil",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  eggs: {
    sudo: "visitor no está en el archivo sudoers. Este incidente será reportado.",
    whoami: {
      pre: "visitor. La verdadera pregunta es quién es Leomar: prueba `",
      cmd: "about",
      post: "`.",
    },
    pods: "Todos los sistemas operativos. Disponibilidad: 99.9%.",
    kubectlError: 'error: comando desconocido. Prueba "kubectl get pods".',
    plan: {
      pre: "Ejecuta `",
      cmd: "terraform apply",
      post: "` para aprovisionar.",
    },
    apply: { pre: "Siguiente paso: escribe `", cmd: "contact", post: "`." },
    terraformUsage: "Uso: terraform [plan | apply]",
    rm: "Buen intento. Producción está protegida con IAM de mínimo privilegio.",
    exit: { pre: "¿Ya te vas? Prueba `", cmd: "contact", post: "` antes." },
  },
};

export default es;
