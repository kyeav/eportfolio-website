import Intern from "../assets/internship-min.PNG";
import Gomovies from "../assets/gomovies-min.PNG";
import Ecomm from "../assets/e-commerce-min.PNG";
import Eport from "../assets/e-portfolio-min.PNG";
import Twitter from "../assets/twitter-min.PNG";
import Hulu from "../assets/hulu-min.PNG";
import Google from "../assets/google-min.PNG";
import Google2 from "../assets/google2-min.PNG";
import Twitter2 from "../assets/twitter2-min.PNG";
import Netflix from "../assets/netflix-min.PNG";
import Markdown from "../assets/markdown-notes-app-min.PNG";

export const projects = [
  {
    id: 1,
    name: "NFT Marketplace Internship",
    image: Intern,
    stack: "React | JavaScript | CSS | HTML",
    description:
      "A SPA that features pagination, carousel, branching, animations, pull-requests, api-integration, rebasing, library-integration, & skeleton-loading-states.",
    github: "https://github.com/kyeav/kylie-internship",
    link: "https://kylie-internship.vercel.app/",
  },
  {
    id: 2,
    name: "gomovies",
    image: Gomovies,
    stack: "React (+ Context API) | Tailwind CSS",
    description:
      "An app for searching, filtering, sorting, viewing top-rated & popular movies & viewing recommended movies & cast for a particular movie.",
    github: "https://github.com/kyeav/react-final-project",
    link: "https://gomovies-kyeav.vercel.app/",
  },
  {
    id: 3,
    name: "E-Commerce Website",
    image: Ecomm,
    stack: "React (+ hooks) | CSS3 (+ BEM) | HTML5",
    description:
      "An E-commerce app that displays data about popular & recommended books. Has the abililty to filter books & add them to cart for purchase.",
    github: "https://github.com/kyeav/library-react",
    link: "https://ecomm-library-kyeav.vercel.app/",
  },
  {
    id: 4,
    name: "E-Portfolio Website",
    image: Eport,
    stack: "CSS3 (+ BEM) | HTML5",
    description:
      "A responsive & multi-platform E-Portfolio that allows individuals to connect with prospective employers, as well as showcasing their skills & projects. Animations, transitions & reusable classes are implemented. Personal information & projects were replaced to maintain privacy.",
    github: "https://github.com/kyeav/e-portfolio",
    link: "https://kyeav.github.io/e-portfolio/",
  },
  {
    id: 5,
    name: "Netflix Clone",
    image: Netflix,
    stack:
      "TypeScript | Next.js | Tailwind CSS | Firebase | Recoil.js | Stripe ",
    description:
      'A fully reponsive app that displays movie trailers with sound functionality. Allows users to login with email, create a watch list of TV shows & movies by adding them to "My List" & pay for subscription plans via Stripe.',
    github: "https://github.com/kyeav/netflix-2.0",
    link: "https://netflix-kyeav.vercel.app/login",
  },
  {
    id: 6,
    name: "Next.js Twitter Clone",
    image: Twitter2,
    stack:
      "TypeScript | Next.js | Tailwind CSS | Sanity | NextAuth.js | Twitter API | GROQ",
    description:
      "A fully reponsive social media app with Tweet, comment threading & login authentication functionality.",
    github: "https://github.com/kyeav/twitter-2.0",
    link: "https://twitter-2-three.vercel.app/",
  },
  {
    id: 7,
    name: "React Twitter Clone",
    image: Twitter,
    stack:
      "Firebase | Material-UI | React-Flip-Move | React | JavaScript | CSS3 (+ BEM) | HTML5",
    description:
      "A fully reponsive social media app with posting tweets functionality.",
    github: "https://github.com/kyeav/twitter-clone",
    link: "https://twitter-clone-b0acc.web.app",
  },
  {
    id: 8,
    name: "Google Clone",
    image: Google2,
    stack:
      "Google Programmable Search Engine | Custom Search JSON API | TypeScript | Next.js | Tailwind CSS",
    description:
      "A search engine that fetches data from Google Custom Search JSON API to display search results - includes pagination.",
    github: "https://github.com/kyeav/google-2.0",
    link: "http://google-2-brown.vercel.app/",
  },
  {
    id: 9,
    name: "Google Clone",
    image: Google,
    stack:
      "Google Custom Search API | React (+ hooks) | Context API (Redux) | JavaScript | CSS | HTML",
    description:
      "A search engine that fetches data from Google Custom Search API to display search results.",
    github: "https://github.com/kyeav/google-clone",
    link: "https://clone-730a7.web.app/",
  },
  {
    id: 10,
    name: "Hulu Clone",
    image: Hulu,
    stack: "Next.js | Tailwind CSS | Flexbox | CSS Grid | REST API",
    description:
      "A constantly updating movie homepage that sorts over 2,500 movies by category.",
    github: "https://github.com/kyeav/hulu-clone",
    link: "https://hulu-kyeav.vercel.app/",
  },
  {
    id: 11,
    name: "Markdown Note-Taking App",
    image: Markdown,
    stack: "React | TypeScript | CSS | HTML | localStorage",
    description:
      "A CRUD note-taking application with markdown support that saves your notes locally. Its key features include bumping the most recent note to the top, automatically generating dynamic note summary titles, lazy state initialization, & local storage for keeping your notes safe.",
    github: "https://github.com/kyeav/markdown-notes-app",
    link: "https://markdown-notes-kyeav.vercel.app/",
  },
];
