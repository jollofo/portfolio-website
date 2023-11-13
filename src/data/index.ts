import { Props } from "@/components/Slider";
import React, { useState } from 'react';
import Image1 from "../../public/images/image1.png";
import asl1 from "../../public/images/asl-alphabet.jpg";
import asl2 from "../../public/images/asl-reader-1.png";
import asl3 from "../../public/images/asl-reader-2.png";
import hvc1 from "../../public/images/gesture-volume-control-1.png";
import hvc2 from "../../public/images/gesture-volume-control-2.png";
import hvc3 from "../../public/images/gesture-volume-control-3.png";
import b1 from "../../public/images/baccarat-1.png";
import b2 from "../../public/images/baccarat-2.png";
import b3 from "../../public/images/baccarat-3.jpg";

// const dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <p className="text-blue-600 cursor-pointer" onClick={toggleDropdown}>
//         University of Rochester
//       </p>
//       {isOpen && (
//         <div className="mt-2 p-4 border rounded shadow-lg">
//           {/* Your content about the University of Rochester goes here */}
//           <p>Details about my experience at the University...</p>
//         </div>
//       )}
//     </div>
//   );
// };

export const headerLeftContent = [
  "I am currently a senior at the University of Rochester and work as a Web Developer as well as an IT consultant.",
  "My passion has always been problem solving, programming is just the most fulfilling way to do that. I love bringing my solutions to life through the code that I write.",
  "I am also keen on psychology. I see understanding human behavior to be the quickest way to helping us solve our biggest problems.",
  "While I am currently based in Rochester, I was born and raised in Nairobi, Kenya. I enjoy video games, reading, and anything that gets me outside.",

];

export const headerRightContent = {
  education: [
    "African Leadership Academy</br> June 2020 </br>",
    "University of Rochester<br />Dec 2024",
  ],
  experiences: [
    "Simon Business School, Rochester, NY <br />IT Consultant<br />May 2021 - Present",
    "University of Rochester, Rochester, NY <br />Web Developer<br />Oct 2022 - Present",
    "Acting Globally, Remote <br />Web Developer<br />Sep 2023 - Present",
    "SEO Career, Remote <br />Tech Developer Intern<br />June 2022 - May 2023",
  ],
  activities: [
    "University of Rochester Christian Fellowship<br />Co-Publicity Chair <br/> May 2022 - Present",
    "University of Rochester <br/> Teaching Assistant <br/> Sep 2021 - Dec 2021",
  ],
  resume: [
    '<strong><a className="link text-[#D3CDD7]" href="" target="undefined" rel="noopener noreferrer">University of Rochester</a></strong>',
  ],
};

export const works: Props[] = [
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
        }
      ],
      left: '<p><strong>Tech Stack:</strong> </br>Python</br><strong>Libraries:</strong><br>OpenCV, MediaPipe, Numpy, CVZone</p><strong>Other:</strong><br>Google\'s Teachable Machine</br><span><a href="https://github.com/jollofo/asl-reader" target="undefined" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>This project recognizes which letters, from the ASL alphabet, are being displayed on the video stream. It contains 1 folder and 2 files. The folder stores images that can be generated from the <strong>HandSignData.py</strong> file. It crops your hand out from a live video stream and saves images upon clicking the 's' key. This data is then used to power the <strong>HandSignTester.py</strong> file which recognizes which signs are being displayed by your hands and displays the result on the video stream. I used Google's Teachable Machine to train the model. As of now the only letters it recognizes are A, B and C.</p>",
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
        }
      ],
      left: '<p><strong>Tech Stack:</strong> </br>Python</br><strong>Libraries:</strong><br>OpenCV, MediaPipe, Numpy, ComTypes</p><br /><span><a href="https://github.com/jollofo/gesture-volume-control" target="undefined" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>This project allows you to control your volume from a live video stream using your finger and thumb. It contains two files: The first, <strong>HandTrackingMod.py</strong>, implements a program that tracks your hands on a live video stream using the MediaPipe and CVZone libraries. This program is used in the <strong>VolumeHandControl.py</strong> file, which does the bulk of the work. It connects to your PC's volume controls and increases or decreases the volume according to the distance between your finger and thumb. This is done on a live video stream where your current volume is displayed alongside the distance between your finger and thumb.</p>",
    },
  },
  {
    title: "Homemade Baccarat",
    data: {
      media: [
        {
          src: b1,
          type: "image",
        },
        {
          src: b2,
          type: "image",
        },
        {
          src: b3,
          type: "image",
        }
      ],
      left: '<p><strong>Tech Stack:</strong> </br>C++</br><br /><span><a href="https://github.com/jollofo/homemade-baccarat" target="undefined" rel="noopener noreferrer">GITHUB LINK</a></span>',
      right:
        "<p>This is project is a simple implementation of the card game, baccarat. It was my first project in C++ and is playable within the terminal. It contains only one file, <strong>main.cpp</strong>, which holds all the code necessary to play the game as well as the rules.</p>",
    },
  },
  // {
  //   title: "Face Detector - Attendance Tracker",
  //   data: {
  //     media: [
  //       {
  //         src: Image1,
  //         type: "image",
  //       },
  //       {
  //         src: Image1,
  //         type: "image",
  //       },
  //       {
  //         src: Image1,
  //         type: "image",
  //       },
  //       {
  //         src: Image1,
  //         type: "image",
  //       },
  //     ],
  //     left: '<p><strong>Tech Stack:</strong> </br>Python</br><strong>Libraries:</strong><br>OpenCV, Pickle, Numpy, Firebase</p><br /><span><a href="https://github.com/jollofo/face-detector" target="undefined" rel="noopener noreferrer">GITHUB LINK</a></span>',
  //     right:
  //       "<p>This project uses a live video stream to recognizeyour face and match it to the information in the database. If your data is in the database, it records your attendance. It contains 3 files: <strong>databaseManager.py</strong> holds the data that the program checks against and handles some of the firebase certificates. <strong>encoder.py</strong> encodes the image data in order to store it more efficiently. Lastly, <strong>main.py</strong> brings everything together. It contains the face tracking code and does the matching of information. If a match is found it upadtes the necessary information.</p>",
  //   },
  // }
];
