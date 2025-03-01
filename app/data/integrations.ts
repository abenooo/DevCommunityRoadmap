import {
  HashIcon as HTMLIcon,
  CodepenIcon as CSSIcon,
  EclipseIcon as JavaScriptIcon,
  CodepenIcon as ReactIcon,
  ViewIcon as VueIcon,
  TriangleIcon as AngularIcon,
  TypeIcon as TypeScriptIcon,
  NetworkIcon as NodeIcon,
  PiIcon as PythonIcon,
  BeanIcon as JavaIcon,
  GemIcon as RubyIcon,
  PizzaIcon as PHPIcon,
  DatabaseIcon as SQLIcon,
  CloudMoonIcon as MongoDBIcon,
  Redo2Icon as RedisIcon,
  GitGraphIcon as GitIcon,
  ContainerIcon as DockerIcon,
  CloudIcon,
  SmartphoneIcon as MobileIcon,
  SquareStackIcon as FullStackIcon,
  ComputerIcon as CybersecurityIcon,
  PieChartIcon as DataScienceIcon,
  DiamondIcon as GameDevIcon,
  BitcoinIcon as BlockchainIcon,
  XIcon as UIUXIcon,
  QrCodeIcon as QAIcon,
  ShoppingCartIcon as EcommerceIcon,
  ImageIcon as AIIcon,
  ImageIcon as IoTIcon,
} from "lucide-react"
import type React from "react"

export type Integration = {
  id: string
  name: string
  description: string
  category: string
  subcategory: string
  icon: React.ComponentType
  color: string
  documentationUrl: string
  prerequisites: string[]
}

export const categories = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile Development",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "Data Science & Machine Learning",
  "Game Development",
  "Blockchain Development",
  "UI/UX Design",
  "Quality Assurance & Testing",
  "E-commerce Development",
  "Artificial Intelligence",
  "Internet of Things",
]

const iconMap = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  JavaScript: JavaScriptIcon,
  "React.js": ReactIcon,
  "Vue.js": VueIcon,
  Angular: AngularIcon,
  TypeScript: TypeScriptIcon,
  "Node.js": NodeIcon,
  Python: PythonIcon,
  Java: JavaIcon,
  Ruby: RubyIcon,
  PHP: PHPIcon,
  SQL: SQLIcon,
  MongoDB: MongoDBIcon,
  Redis: RedisIcon,
  Git: GitIcon,
  Docker: DockerIcon,
  Cloud: CloudIcon,
  Mobile: MobileIcon,
  FullStack: FullStackIcon,
  Cybersecurity: CybersecurityIcon,
  DataScience: DataScienceIcon,
  GameDev: GameDevIcon,
  Blockchain: BlockchainIcon,
  UIUX: UIUXIcon,
  QA: QAIcon,
  Ecommerce: EcommerceIcon,
  AI: AIIcon,
  IoT: IoTIcon,
}

type IconMapKey = keyof typeof iconMap;

const colorPalette = [
  "#FF4A00",
  "#96BF48",
  "#E37400",
  "#FFE01B",
  "#F06A6A",
  "#FFCC22",
  "#6772E5",
  "#F22F46",
  "#2D8CFF",
  "#0061FF",
  "#00A1E0",
  "#D32D27",
  "#4CAF50",
  "#9C27B0",
  "#FF9800",
  "#795548",
  "#607D8B",
  "#3F51B5",
  "#00BCD4",
  "#FFC107",
]

const techRoadmap = {
  "Frontend Development": [
    { name: "HTML", prerequisites: [], documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", prerequisites: ["HTML"], documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    {
      name: "JavaScript",
      prerequisites: ["HTML", "CSS"],
      documentationUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "React.js",
      prerequisites: ["JavaScript"],
      documentationUrl: "https://reactjs.org/docs/getting-started.html",
    },
    { name: "Vue.js", prerequisites: ["JavaScript"], documentationUrl: "https://vuejs.org/v2/guide/" },
    { name: "Angular", prerequisites: ["JavaScript", "TypeScript"], documentationUrl: "https://angular.io/docs" },
    { name: "TypeScript", prerequisites: ["JavaScript"], documentationUrl: "https://www.typescriptlang.org/docs/" },
    { name: "Next.js", prerequisites: ["React.js"], documentationUrl: "https://nextjs.org/docs" },
    { name: "Gatsby", prerequisites: ["React.js"], documentationUrl: "https://www.gatsbyjs.com/docs/" },
  ],
  "Backend Development": [
    { name: "Node.js", prerequisites: ["JavaScript"], documentationUrl: "https://nodejs.org/en/docs/" },
    { name: "Express.js", prerequisites: ["Node.js"], documentationUrl: "https://expressjs.com/" },
    { name: "Python", prerequisites: [], documentationUrl: "https://docs.python.org/3/" },
    { name: "Django", prerequisites: ["Python"], documentationUrl: "https://docs.djangoproject.com/" },
    { name: "Flask", prerequisites: ["Python"], documentationUrl: "https://flask.palletsprojects.com/" },
    { name: "Java", prerequisites: [], documentationUrl: "https://docs.oracle.com/en/java/" },
    { name: "Spring Boot", prerequisites: ["Java"], documentationUrl: "https://spring.io/projects/spring-boot" },
    { name: "Ruby", prerequisites: [], documentationUrl: "https://www.ruby-lang.org/en/documentation/" },
    { name: "Ruby on Rails", prerequisites: ["Ruby"], documentationUrl: "https://guides.rubyonrails.org/" },
    { name: "PHP", prerequisites: [], documentationUrl: "https://www.php.net/docs.php" },
    { name: "Laravel", prerequisites: ["PHP"], documentationUrl: "https://laravel.com/docs" },
  ],
  Database: [
    { name: "SQL", prerequisites: [], documentationUrl: "https://www.w3schools.com/sql/" },
    { name: "MySQL", prerequisites: ["SQL"], documentationUrl: "https://dev.mysql.com/doc/" },
    { name: "PostgreSQL", prerequisites: ["SQL"], documentationUrl: "https://www.postgresql.org/docs/" },
    { name: "MongoDB", prerequisites: [], documentationUrl: "https://docs.mongodb.com/" },
    { name: "Redis", prerequisites: [], documentationUrl: "https://redis.io/documentation" },
  ],
  DevOps: [
    { name: "Git", prerequisites: [], documentationUrl: "https://git-scm.com/doc" },
    { name: "Docker", prerequisites: [], documentationUrl: "https://docs.docker.com/" },
    { name: "Kubernetes", prerequisites: ["Docker"], documentationUrl: "https://kubernetes.io/docs/" },
    { name: "Jenkins", prerequisites: [], documentationUrl: "https://www.jenkins.io/doc/" },
    { name: "Terraform", prerequisites: [], documentationUrl: "https://www.terraform.io/docs" },
    { name: "Ansible", prerequisites: [], documentationUrl: "https://docs.ansible.com/" },
  ],
  "Cloud Computing": [
    { name: "AWS", prerequisites: [], documentationUrl: "https://docs.aws.amazon.com/" },
    { name: "Azure", prerequisites: [], documentationUrl: "https://docs.microsoft.com/en-us/azure/" },
    { name: "Google Cloud", prerequisites: [], documentationUrl: "https://cloud.google.com/docs" },
    {
      name: "Serverless",
      prerequisites: ["AWS", "Azure", "Google Cloud"],
      documentationUrl: "https://www.serverless.com/framework/docs/",
    },
  ],
  "Mobile Development": [
    { name: "iOS (Swift)", prerequisites: [], documentationUrl: "https://developer.apple.com/documentation/swift" },
    { name: "Android (Kotlin)", prerequisites: [], documentationUrl: "https://developer.android.com/kotlin" },
    {
      name: "React Native",
      prerequisites: ["React.js"],
      documentationUrl: "https://reactnative.dev/docs/getting-started",
    },
    { name: "Flutter", prerequisites: [], documentationUrl: "https://flutter.dev/docs" },
  ],
  "Full Stack Development": [
    {
      name: "MERN Stack",
      prerequisites: ["MongoDB", "Express.js", "React.js", "Node.js"],
      documentationUrl: "https://www.mongodb.com/mern-stack",
    },
    {
      name: "MEAN Stack",
      prerequisites: ["MongoDB", "Express.js", "Angular", "Node.js"],
      documentationUrl: "https://mean.io/",
    },
    {
      name: "LAMP Stack",
      prerequisites: ["Linux", "Apache", "MySQL", "PHP"],
      documentationUrl: "https://www.ibm.com/cloud/learn/lamp-stack-explained",
    },
    { name: "JAMstack", prerequisites: ["JavaScript", "APIs", "Markup"], documentationUrl: "https://jamstack.org/" },
  ],
  Cybersecurity: [
    {
      name: "Network Security",
      prerequisites: [],
      documentationUrl: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html",
    },
    {
      name: "Ethical Hacking",
      prerequisites: ["Network Security"],
      documentationUrl: "https://www.eccouncil.org/ethical-hacking/",
    },
    { name: "Cryptography", prerequisites: [], documentationUrl: "https://www.nist.gov/cryptography" },
    {
      name: "Security Information and Event Management (SIEM)",
      prerequisites: ["Network Security"],
      documentationUrl:
        "https://www.gartner.com/en/information-technology/glossary/security-information-and-event-management-siem",
    },
  ],
  "Data Science & Machine Learning": [
    {
      name: "Python for Data Science",
      prerequisites: ["Python"],
      documentationUrl: "https://scikit-learn.org/stable/",
    },
    { name: "R Programming", prerequisites: [], documentationUrl: "https://www.r-project.org/about.html" },
    {
      name: "Machine Learning",
      prerequisites: ["Python for Data Science"],
      documentationUrl: "https://www.tensorflow.org/",
    },
    { name: "Deep Learning", prerequisites: ["Machine Learning"], documentationUrl: "https://pytorch.org/" },
    {
      name: "Big Data Analytics",
      prerequisites: ["Python for Data Science"],
      documentationUrl: "https://hadoop.apache.org/",
    },
  ],
  "Game Development": [
    { name: "Unity", prerequisites: ["C#"], documentationUrl: "https://docs.unity3d.com/" },
    { name: "Unreal Engine", prerequisites: ["C++"], documentationUrl: "https://docs.unrealengine.com/" },
    { name: "Godot", prerequisites: [], documentationUrl: "https://docs.godotengine.org/" },
    { name: "Game Design Principles", prerequisites: [], documentationUrl: "https://www.gamasutra.com/" },
  ],
  "Blockchain Development": [
    { name: "Blockchain Fundamentals", prerequisites: [], documentationUrl: "https://developer.bitcoin.org/devguide/" },
    {
      name: "Ethereum & Smart Contracts",
      prerequisites: ["Blockchain Fundamentals"],
      documentationUrl: "https://ethereum.org/en/developers/docs/",
    },
    {
      name: "Solidity",
      prerequisites: ["Ethereum & Smart Contracts"],
      documentationUrl: "https://docs.soliditylang.org/",
    },
    {
      name: "Decentralized Applications (DApps)",
      prerequisites: ["Ethereum & Smart Contracts"],
      documentationUrl: "https://ethereum.org/en/dapps/",
    },
  ],
  "UI/UX Design": [
    {
      name: "User Research",
      prerequisites: [],
      documentationUrl: "https://www.usability.gov/what-and-why/user-research.html",
    },
    {
      name: "Wireframing",
      prerequisites: [],
      documentationUrl: "https://www.usability.gov/how-to-and-tools/methods/wireframing.html",
    },
    {
      name: "Prototyping",
      prerequisites: ["Wireframing"],
      documentationUrl: "https://www.interaction-design.org/literature/topics/prototyping",
    },
    { name: "User Interface Design", prerequisites: ["Wireframing"], documentationUrl: "https://material.io/design" },
    {
      name: "User Experience Design",
      prerequisites: ["User Research", "User Interface Design"],
      documentationUrl: "https://www.interaction-design.org/literature/topics/ux-design",
    },
  ],
  "Quality Assurance & Testing": [
    { name: "Manual Testing", prerequisites: [], documentationUrl: "https://www.guru99.com/manual-testing.html" },
    {
      name: "Automated Testing",
      prerequisites: ["Manual Testing"],
      documentationUrl: "https://www.selenium.dev/documentation/",
    },
    {
      name: "Test-Driven Development (TDD)",
      prerequisites: ["Automated Testing"],
      documentationUrl: "https://www.agilealliance.org/glossary/tdd/",
    },
    {
      name: "Performance Testing",
      prerequisites: ["Automated Testing"],
      documentationUrl: "https://jmeter.apache.org/",
    },
  ],
  "E-commerce Development": [
    {
      name: "E-commerce Platforms",
      prerequisites: [],
      documentationUrl: "https://www.shopify.com/partners/blog/ecommerce-platforms",
    },
    {
      name: "Payment Gateway Integration",
      prerequisites: ["E-commerce Platforms"],
      documentationUrl: "https://stripe.com/docs",
    },
    {
      name: "Shopping Cart Development",
      prerequisites: ["E-commerce Platforms"],
      documentationUrl: "https://docs.woocommerce.com/",
    },
    { name: "E-commerce SEO", prerequisites: [], documentationUrl: "https://moz.com/blog/category/ecommerce" },
  ],
  "Artificial Intelligence": [
    {
      name: "Machine Learning",
      prerequisites: ["Python for Data Science"],
      documentationUrl: "https://scikit-learn.org/stable/",
    },
    {
      name: "Natural Language Processing",
      prerequisites: ["Machine Learning"],
      documentationUrl: "https://www.nltk.org/",
    },
    { name: "Computer Vision", prerequisites: ["Machine Learning"], documentationUrl: "https://opencv.org/" },
    {
      name: "Reinforcement Learning",
      prerequisites: ["Machine Learning"],
      documentationUrl: "https://gym.openai.com/",
    },
  ],
  "Internet of Things": [
    {
      name: "IoT Protocols",
      prerequisites: [],
      documentationUrl: "https://www.postscapes.com/internet-of-things-protocols/",
    },
    { name: "Embedded Systems", prerequisites: [], documentationUrl: "https://www.arduino.cc/" },
    { name: "IoT Platforms", prerequisites: ["IoT Protocols"], documentationUrl: "https://aws.amazon.com/iot/" },
    {
      name: "IoT Security",
      prerequisites: ["IoT Protocols", "Cybersecurity"],
      documentationUrl: "https://www.owasp.org/index.php/OWASP_Internet_of_Things_Project",
    },
  ],
}

function generateIntegrations(): Integration[] {
  const integrations: Integration[] = []
  let id = 1

  Object.entries(techRoadmap).forEach(([category, technologies]) => {
    technologies.forEach((tech) => {
      const iconKey = (tech.name in iconMap ? tech.name : category.replace(" ", "")) as IconMapKey
      const icon = iconMap[iconKey] || iconMap.FullStack
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]

      integrations.push({
        id: `${id++}`,
        name: tech.name,
        description: `${tech.name} is a key technology in ${category}. ${tech.prerequisites.length > 0 ? `It's recommended to learn ${tech.prerequisites.join(", ")} before diving into ${tech.name}.` : ""}`,
        category,
        subcategory: category,
        icon,
        color,
        documentationUrl: tech.documentationUrl,
        prerequisites: tech.prerequisites,
      })
    })
  })

  return integrations
}

export const integrations = generateIntegrations()

