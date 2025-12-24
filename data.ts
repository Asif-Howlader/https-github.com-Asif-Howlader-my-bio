
import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  name: "Saddam Howlader",
  title: "IT Officer",
  profile_image: "input_file_1.png",
  contact: {
    email: "asifnowlader4@gmail.com",
    phone: "(+880) 1970321576",
    address: "Shahid Bacchu Sadak, Tormugoria, Master Colony, Madaripur. House 8/1, Block-3, Word-06, Road-06, Fulbadia, Turag, Dhaka-1230., 7900 Madaripur (Bangladesh)",
    linkedin: "linkedin.com/in/saddamhowlader/",
    twitter: "x.com/saddamhowlader6"
  },
  experience: [
    {
      role: "IT Officer",
      company: "Bangladesh Government ICT Project",
      period: "08/05/2022 – Present",
      location: "Dhaka, Bangladesh",
      responsibilities: ["Infrastructure maintenance & technical support", "Web App Dev", "Digital Forensics"]
    },
    {
      role: "Support Engineer",
      company: "CRYSTAL TECHNOLOGY BANGLADESH LTD.",
      period: "02/10/2021 – 30/04/2022",
      location: "Madaripur, Bangladesh",
      responsibilities: ["Cyber Security", "Network Administrator", "Technical Support"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science (BSc)",
      institution: "Daffodil International University",
      period: "2014 – 2018",
      location: "Dhaka"
    }
  ],
  skills: [
    "Digital Forensics", "Cybersecurity", "Python", "Linux", "Networking", "Burp Suite"
  ],
  languages: ["Bengali (Native)", "English (Professional)"]
} as any;
