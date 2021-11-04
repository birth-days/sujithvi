import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaBook } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: MdDeveloperMode,
    title: "Read my latest blog on-",
    about:
      "R1-R7",
  },
  {
    Icon: FaBook,
    title: "Currently reading-",
    about:
      "...",
  },
  // {
  //   Icon: AiOutlineApi,
  //   title: "API Development",
  //   about:
  //     "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  // },
  // {
  //   Icon: MdDeveloperMode,
  //   title: "Competitive Coder",
  //   about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  // },
  // {
  //   Icon: AiOutlineAntDesign,
  //   title: "UI/UX designer",
  //   about:
  //     "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  // },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "C/C++",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    name: "R1-R7",
    oneliner: "He wished for a book and the universe gifted him a library",
    reqtime: "29-Sept-2021 || 2 Min Read",
    desc: {"How did I get here?":"After my plus two I went to Pala for the entrance repeat. I managed to score good in KEAM which was considered to be the best score compared to the previous. Later with the Kerala State Board exam mark I was sure about getting into one of the best colleges in Kerala. I was more passionate for Electronics and Communication thus made my first choice as EC at CET, but when i considered with my mentors they instructed me that CS which is the most placed branch in Engineering and it is better to choose that so i made a decision to be a EC ian if I get CET and later to other colleges I have given CS as the primary option. When the allotment came I got TKM in the first chance itself. When I reached TKM and became friends with some of the students I dropped other options and stayed back there",
    "What about TKM?":"TKM Thangal Kunju Musaliar College of Engineering and Technology with its architecture and ambience is more similar to the Mosque. But with a wide variety of students the ambience and looks don't matter in any way. We the CS abbreviated as R batch, The theme ‘We R1 we are one’ was popular because we became the first batch in TKM to become so close in very less time. Moving on we celebrate our first year with surprises, miseries, pain and miracles… Later we managed to gather for different events including Hackathons etc..And the constant participants of different hackathons became a team we named it ‘Semi :’  Our first hackathon was Make A Ton conducted by CUSAT. We went and one of our team had 4 members and our team had 6 for the participation. Each team required 5. One of our team mates became part of the other team and we 5 participated as the other team. Hard Luck we failed but the food was awesome lol. From there we were inspired to get exposure, fame and learning that a hackathon given in less than a day cannot be obtained from anywhere else. We were eagerly and actively looking for new opportunities, we won small small hackathons that TKMCE conducted but not something big, during that time we managed to find the ‘Reboot Kerala Hackathon’ since it was a grand hackathon and our inspiration was mainly food we registered for the event but the topic, tech stack and everything was unfamiliar for us. But still we had 36 hours and we worked with our maximum potential. We got mentors ‘Starmon’,’Bineesh’ and ‘Amrutha’ both working in different sections of Govt organisations, It was shocking to know that we managed to get first and Hon’ble Chief Minister Pinarayi sir gives us the prize. That’s where the hackathon fire ended. We all become part of different other projects.",
    "Reboot Kerala Phase 2":"Fast forward to different months in the recent time we had the second phase of RBH. Topic was as usual too tough to implement in a short span of time but we managed to learn different things, different tech stacks. But we are not the best in any of the fields, So we gathered back the old team, as covid strikes all over the world the hackathon was also in online mode. We had communication issues and Online was not a familiar mode for traditional students like us even though we managed to do a lot but with hard luck we didn’t perform well. That was our last Hackathon."},
    description:"",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["latest"],
    key_techs: ["Life", "College", "CS"],
  },
  // { 
  //   name: "COVID Tracker1",
  //   oneliner: "I got to learn about product management, lean methodology and building minimum viable products, here is the full story",
  //   description:
  //     "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).     Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  //   desc: {"Head 1":"Content 1","Head 2":"Content 2"},
  //   reqtime: "2 Min Read",
  //   image_path: "/images/covid.jpg",
  //   deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  //   category: ["old"],
  //   key_techs: ["React", "Chart.js", "Material UI"],
  // },
];
