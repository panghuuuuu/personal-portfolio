import Main from "../assets/works/1.png";
import Aegis from "../assets/works/5.png";
import Guidon from "../assets/works/4.png";
import OrSem from "../assets/works/6.png";

export const Projects = {
  "ILAW Database": {
    image: Main,
    description:
      "A research database for St. Theresa's College students and teachers to access academic journals and papers.",
    github_link: "",
    live_site: "https://ilawdatabase.com/",
    technologies: ["PHP", "JavaScript", "CSS", "MySQL"],
  },
  "AEGIS Photoshoot Enlistment Website": {
    image: Aegis,
    description:
      "An automated signup system for Ateneo's senior photoshoot, managing 2,500+ signups and improving user experience.",
    github_link: "",
    live_site: "https://aegis.ateneo.edu/",
    technologies: ["Next.js", "ReactJS", "Django REST"],
  },
  "UAAP Season 86 Primer - First Semester": {
    image: Guidon,
    description:
      "A digital primer showcasing Blue Eagles' insights and expectations for UAAP Season 86.",
    github_link: "",
    live_site: "https://theguidon.com/1112/main/uaap-86-primer-volume-1/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  "ADMU OrSem Website": {
    image: OrSem,
    description:
      "A platform providing essential information for 2,500+ freshmen entering Ateneo each year.",
    github_link: "",
    live_site: "https://admuorsem.com/",
    technologies: ["Django REST", "PostgreSQL", "ReactJS", "TailwindCSS"],
  },
};
