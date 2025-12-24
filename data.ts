import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Saddam Howlader",
  title: "IT Officer",
  profile_image: "https://pbs.twimg.com/profile_images/1176977716110741504/R-9FBsxM_400x400.jpg",
  contact: {
    email: "asifnowlader4@gmail.com",
    phone: "(+880) 1970321576",
    address: "Shahid Bacchu Sadak, Tormugoria, Master Colony, Madaripur. Dhaka-1230, Bangladesh",
    linkedin: "linkedin.com/in/saddamhowlader/",
    twitter: "x.com/saddamhowlader6"
  },
  experience: [
    {
      role: "IT Officer",
      company: "Bangladesh Government ICT Project",
      period: "2022 – Present",
      location: "Dhaka, Bangladesh",
      responsibilities: [
        "Specialized in Infrastructure maintenance & technical support",
        "Lead Web Application Development and rigorous security testing",
        "Expertise in Digital Forensics & Incident Response (DFIR)",
        "Management of high-performance national ICT assets"
      ]
    },
    {
      role: "Support Engineer",
      company: "CRYSTAL TECHNOLOGY BANGLADESH LTD.",
      period: "2021 – 2022",
      location: "Madaripur, Bangladesh",
      responsibilities: [
        "End-to-end network administration and monitoring",
        "Cybersecurity threat detection and protocol implementation",
        "Enterprise-level technical support for government departments"
      ]
    },
    {
      role: "IT Executive",
      company: "Adorsho Online Network",
      period: "2019 – 2021",
      location: "Madaripur, Bangladesh",
      responsibilities: [
        "ISP-level infrastructure management and routing",
        "Surveillance systems deployment and physical security monitoring",
        "Hardware quality control and inventory management"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Daffodil International University",
      period: "2014 – 2018",
      location: "Dhaka"
    },
    {
      degree: "Diploma in Engineering",
      institution: "Barishal Polytechnic Institute",
      period: "2011 – 2014",
      location: "Barishal"
    }
  ],
  skills: [
    "Digital Forensics", "Cybersecurity", "Network Administration", "Linux/Unix", "Windows Server", "Python", "SQL", "Burp Suite", "Wireshark", "Metasploit", "CCTV Infrastructure"
  ],
  languages: ["Bengali (Native)", "English (Professional)"]
};