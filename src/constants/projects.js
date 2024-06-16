import Main from "../assets/works/1.png";
import Aegis from "../assets/works/5.png";
import Guidon from "../assets/works/4.png";

export const Projects = {
  "ILAW Database": {
    image: Main,
    description:
      "The Integrated Library Automated Website or ILAW research database helps St. Theresa's College Q.C. students and teachers organize and access Theresians' academic journals and research papers.",
    github_link: "https://github.com/panghuuuuu/stcqc-database",
    live_site: "",
    technologies: ["PHP", "CSS", "MySQL"],
  },
  "AEGIS Photoshoot Enlistment Website": {
    image: Aegis,
    description:
      "Built an automated signup system for Ateneo's senior photoshoot season, handling 2,500+ signups (individual & group) and improving the user experience for both students and administrators.",
    github_link: "",
    live_site: "https://aegis.ateneo.edu/",
    technologies: ["Next.js", "ReactJS", "Django REST"],
  },
  "UAAP Season 86 Primer - First Semester": {
    image: Guidon,
    description:
      "The GUIDON Sports' First Semester Digital Primer that shows the lessons, narratives, and expectations that the Blue Eagles shared coming into UAAP Season 86",
    github_link: "",
    live_site: "https://theguidon.com/1112/main/uaap-86-primer-volume-1/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
};
