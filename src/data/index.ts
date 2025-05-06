import { SliderProps } from "@/components/Slider";
import asl1 from "../../public/images/asl-alphabet.jpg";
import asl2 from "../../public/images/asl-reader-1.png";
import asl3 from "../../public/images/asl-reader-2.png";
import hvc1 from "../../public/images/gesture-volume-control-1.png";
import hvc2 from "../../public/images/gesture-volume-control-2.png";
import hvc3 from "../../public/images/gesture-volume-control-3.png";
import f1 from "../../public/images/face-1.png";
import f2 from "../../public/images/face-2.png";
import f3 from "../../public/images/face-3.png";
import c1 from "../../public/images/cache-1.png";
import c2 from "../../public/images/cache-2.png";
import c3 from "../../public/images/cache-3.png";
import g1 from "../../public/images/golazo_1.png";
import g2 from "../../public/images/golazo_2.png";
import g3 from "../../public/images/golazo_3.png";
import g4 from "../../public/images/golazo_4.png";

export const education = [
  {
    title: "University of Rochester",
    date: "2020-2025",
    paragraph:
      "I am in my Senior year studying Computer Science with a minor in Psychology. Outside of school, I am part of organizations such as the Pan-African Students Association and NSBE. I am also the Publicity Chair for the University of Rochester Christian Fellowship.",
  },
  {
    title: "African Leadership Academy",
    date: "2018-2020",
    paragraph:
      "ALA is an A-levels program based in South Africa that focuses on developing the next generation of leaders. I had the privilege to attend the program where I finished with two AS-levels in English and Computer Science and 2 A-levels in Economics and Math.",
  },
];

export const work = [
  {
    title: "Online Instructor - iD Tech",
    date: "Dec 2023 - May 2024",
    paragraph:
      "At iD Tech, I provided dynamic and interactive online learning experience in Python, JavaScript, and C++ for both groups and individuals. My focus was on customizing each curriculum to fit each student's aspirations while ensuring smooth virtual classes.",
  },
  {
    title: "Intern - Acting Globally",
    date: "Sep 2023 - Aug 2024",
    paragraph:
      "Acting Globally works to connect volunteers with grassroots groups around the world. I collaborated with a team of four developers to create innovative tools for these volunteers and grassroots organizations including dynamic signup sheets and project dashboards. I also aided in building the front-end using React.js and Next.js and engineering a back-end system using MongoDB and Node.js that optimized data maintenance and retrieval processes"
  },
  {
    title: "Web Developer - University of Rochester",
    date: "Oct 2022 - Present",
    paragraph:
      "As a Web Developer, I mainly update our University IT's logistics web application. I've spearheaded the integration of Google APIs, to help streamline schedule management for the university community. ",
  },
  {
    title: "Tech Developer Intern - SEO Career",
    date: "Jun 2022 - May 2023",
    paragraph: 
      "SEO Tech Developer is a remote tech training course that I had the opportunity to participate in. I immersed myself in a comprehensive prep program, accruing over 300 hours of training and creating web applications that leverage a broad range of technologies. ",
  },
  {
    title: "IT Consultant (Team Lead) - Simon Business School",
    date: "May 2021 - Present",
    paragraph:
      "At the Simon Business School, I have helped resolve various software installation issues, network connectivity problems, and hardware complications. I engineered a Python program to automatically verify Zoom account settings and developed a script to automate the adding and removing of 500+ students from various Slack spaces using Slack's API.",
  },
];

export const technologies = [
  {
    title: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    title: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    title: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  },
  {
    title: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    title: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    title: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    title: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    title: "Tailwind CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
  },
  {
    title: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    title: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    title: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    title: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    title: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  }
];

export const headerRightContent = {
  certifcates: [
    "AWS Technical Essentials<br/>AWS <br/> Jan 2024 <br/>",
    "Paragon One Certificate<br/> Paragon One <br/> Dec 2023 <br/>",
    "C++ Course<br /> Codeacademy <br/> Jul 2023",
    "C# Course<br /> Codeacademy <br/> Jun 2023",
  ],
};

export const projects: SliderProps[] = [
  {
    title: "American Sign Language Reader",
    data: {
      media: [
        {
          src: asl1,
          type: "image",
        },
        {
          src: asl2,
          type: "image",
        },
        {
          src: asl3,
          type: "image",
        },
      ],
      left: '<p><strong>Tech Stack:</strong></br>Python</br><strong>Libraries:</strong><br>OpenCV, MediaPipe, Numpy, CVZone</p><strong>Other:</strong><br>Google\'s Teachable Machine<br/></br><span><a href="https://github.com/jollofo/asl-reader" target="_blank" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>This project recognizes which letters, from the ASL alphabet, are being displayed on the video stream. It contains 1 folder and 2 files. The folder stores images that can be generated from the <strong>HandSignData.py</strong> file. It crops your hand out from a live video stream and saves images upon clicking the 's' key. This data is then used to power the <strong>HandSignTester.py</strong> file which recognizes which signs are being displayed by your hands and displays the result on the video stream. I used Google's Teachable Machine to train the model.</p>",
    },
  },
  {
    title: "Face Detector - Attendance Tracker",
    data: {
      media: [
        {
          src: f1,
          type: "image",
        },
        {
          src: f2,
          type: "image",
        },
        {
          src: f3,
          type: "image",
        },
      ],
      left: '<p><strong>Tech Stack:</strong> </br>Python</br><strong>Libraries:</strong><br>OpenCV, Pickle, Numpy</p><strong>Other:</strong><br/>Firebase<br/><br/><span><a href="https://github.com/jollofo/face-detector" target="_blank" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>This project uses a live video stream to recognize your face and match it to the information in the database. If your data is in the database, it records your attendance. It contains 3 files: <strong>databaseManager.py</strong> holds the data that the program checks against and handles some of the firebase certificates. <strong>encoder.py</strong> encodes the image data in order to store it more efficiently. Lastly, <strong>main.py</strong> brings everything together. It contains the face tracking code and does the matching of information. If a match is found it upadtes the necessary information.</p>",
    },
  },
  {
    title: "Golazo.UR - FIFA Tracking System",
    data: {
      media: [
        {
          src: g1,
          type: "image",
        },
        {
          src: g2,
          type: "image",
        },
        {
          src: g3,
          type: "image",
        },
        {
          src: g4,
          type: "image",
        },
      ],
      left: '<p><strong>Tech Stack:</strong> </br>TypeScript, SQL</br><strong>Libraries:</strong><br>Motion</p><strong>Other:</strong><br/>PostgreSQL<br/><br/><span><a href="https://github.com/jollofo/golazo" target="_blank" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>Golazo is a web application that aims to streamline and manage FIFA players, tournaments and rankings for FIFA enthusiasts across Rochester. With <strong/>50+ active users</strong> spread across the University of Rochester, Monroe Community College and Rochester Institute of Technology, Golazo strives to be an evolving hub for FIFA players.</p>",
    },
  },
  {
    title: "Hand Volume Control",
    data: {
      media: [
        {
          src: hvc1,
          type: "image",
        },
        {
          src: hvc2,
          type: "image",
        },
        {
          src: hvc3,
          type: "image",
        },
      ],
      left: '<p><strong>Tech Stack:</strong> </br>Python</br><strong>Libraries:</strong><br>OpenCV, MediaPipe, Numpy, ComTypes</p><br /><span><a href="https://github.com/jollofo/gesture-volume-control" target="_blank" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>This project allows you to control your volume from a live video stream using your finger and thumb. It contains two files: The first, <strong>HandTrackingMod.py</strong>, implements a program that tracks your hands on a live video stream using the MediaPipe and CVZone libraries. This program is used in the <strong>VolumeHandControl.py</strong> file, which does the bulk of the work. It connects to your PC's volume controls and increases or decreases the volume according to the distance between your finger and thumb. This is done on a live video stream where your current volume is displayed alongside the distance between your finger and thumb.</p>",
    },
  },
  {
    title: "Cache",
    data: {
      media: [
        {
          src: c1,
          type: "image",
        },
        {
          src: c3,
          type: "image",
        },
        {
          src: c2,
          type: "image",
        },
      ],
      left: '<p><strong>Tech Stack:</strong></br>React.js, C#<br/><strong>Libraries:</strong><br/>Tailwind.css<br/><strong>Other:</strong><br/>Firebase<br/><br/><span><a href="https://github.com/jollofo/Cache" target="_blank" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>Cache is a an online image hosting and sharing platform intended to give people the ability to upload pictures and share them easily. It works by allowing users to create a room and upload images to it. Each room has a unique key that they can then share with people who will be able to access the room. Each room exists temporarily and can be deleted by a user or is deleted automatically after the allocated time. The images are stored in a <strong>Firbase</strong> storage bucket. The front end is built using <strong>React.js</strong> and <strong>Tailwind.css</strong> while the back end is built in <strong>C#</strong>.</p>",
    },
  },
];
