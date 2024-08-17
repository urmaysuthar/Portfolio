export const introductionData = {
  yourName: "Urmay Suthar",
  socialNetwork: [
    {
      svgPath: "assets/email.svg", // find other icon in https://fontawesome.com/v4.7/icons/
      nameSocialNetwork: "Email", // label name
      url: "mailto:urmay.suthar0100@gmail.com", //  url of the Social Network
    },
    {
      svgPath: "assets/linkedin.svg",
      nameSocialNetwork: "Linkedin",
      url: "https://www.linkedin.com/in/urmaysuthar/",
    },
    {
      svgPath: "assets/githubicon.svg",
      nameSocialNetwork: "Github",
      url: "https://github.com/urmaysuthar",
    },
  ],

  // Page session direction
  
  nav: [
    {
      optionNav: "About me",
      idSection: "about",
    },
    {
      optionNav: "Goals and Reflections",
      idSection: "goals-reflections",
    },
    {
      optionNav: "Skills",
      idSection: "skills",
    },
    {
      optionNav: "Projects",
      idSection: "projects",
    },
  ],
};

//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
  title: "About Me",
  description:
    "Hey there! I’m Urmay. I’m a third-year Computer Science student at York University. I was born and raised in the vibrant city of Nairobi, Kenya. I believe in the power of technology to simplify and enrich our day-to-day lives. I’m passionate about Leadership, problem-solving and creating innovative solutions. I’ve developed skills in a variety of programming languages including Java, Python, JavaScript, C , C++ and more. I’m always eager to keep up with the ever-evolving world of technology and to expand on my technical expertise, whether that means delving deeper into the technology I already know or exploring new languages and frameworks.  ",
  titleURL: "my Resume",
  urlCV:
    "https://drive.google.com/file/d/1FOHgnlqBc_qWK7o2nqVZM85arv_XuAqH/view?usp=sharing",
};

export const goalsAndReflectionsData = {
  title: "Goals and Reflections",
  description:
    "<p>As I continue my journey through Computer Science, my main goal is to build on the solid foundation I’m creating at university. I’m eager to take what I’m learning and apply it in real life, much like I’m doing in my internship right now. I’m also looking to dive into new areas like Machine Learning, Analytics, and App Development. These are fields I’m excited to explore as I figure out the direction I want to take in my future career.</p>" +
    "<p>Reflecting on my experiences, I’ve found great value in talking to the experienced professionals at my internship. These conversations often revolve around the key decisions they’ve made in their lives—their successes, their challenges, and sometimes the mistakes they’ve learned from. Listening to their stories helps me understand not just the kind of engineer I want to be, but the kind of person I want to become. It’s a way for me to gather insights, learn from their paths, and shape my own with more clarity and purpose.</p>",
  titleURL: "Explore my Journey",
  urlCV:
    "https://drive.google.com/file/d/1FOHgnlqBc_qWK7o2nqVZM85arv_XuAqH/view?usp=sharing",
};




//=========================================
//                 SKILLS
//=========================================
export const skillsData = [
  {
    img: "assets/java.svg",
    nameSkill: "Java",
  },
  {
    img: "assets/python.svg",
    nameSkill: "Python",
  },
  {
    img: "assets/js.svg",
    nameSkill: "JavaScript",
  },
  {
    img: "assets/html-icon.svg",
    nameSkill: "HTML",
  },
  {
    img: "assets/css-icon.svg",
    nameSkill: "CSS",
  },
  {
    img: "assets/c-program-icon.svg",
    nameSkill: "C",
  },
  {
    img: "assets/mysql-icon.svg",
    nameSkill: "SQL",
  },
  {
    img: "assets/git-icon.svg",
    nameSkill: "Git",
  },
  {
    img: "assets/firebase-svgrepo-com.svg",
    nameSkill: "Firebase",
  },
  {
    img: "assets/c++.svg",
    nameSkill: "C++",
  },
  {
    img: "assets/react.svg",
    nameSkill: "React",
  },
  {
    img: "assets/node-js-svgrepo-com.svg",
    nameSkill: "Node JS",
  },
  {
    img: "assets/aws.svg",
    nameSkill: "AWS",
  },
  {
    img: "assets/git-hub.svg",
    nameSkill: "Github",
  },
  {
    img: "assets/figma-svgrepo-com.svg",
    nameSkill: "Figma",
  },
];

export const workExperienceData = [
  {
    name: "Hudsons Bay Company",
    period: "Jul 2022 - Jan 2023",
    description: "Stock Handler and Sales Associate. Working at Hudson’s Bay taught me a lot about working with others and staying patient, especially during busy times. Whether I was organizing stock or helping customers find the right shoes, I realized how important even the small tasks are in making things run smoothly."
  },
  {
    name: "Ontario Power Generation",
    period: "May 2024 - Present",
    description: "Projects Design Intern with responsibilities to develop, maintain, and troubleshoot internal apps used by thousands of employees. Additionally, I am supporting on-going Nuclear projects ."
  },
  {
    name: "Ontario Power Generation",
    period: "May 2024 - Present",
    description: "Currently working on enhancing app features and improving user experience in a fast-paced environment."
  }
];


//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
  {
    title: "StepsGenerator.AI",
    tools: "React, Tailwind CSS, Node.js, Express.js, OpenAI API, Figma ",
    describe:
      "'Steps, The To-Do List Generator', was developed during the Ignitionhacks v4 2023 hackathon as a solution to the issue of wasted time and productivity due to excessive planning or uncertainty about where to start. Steps is an AI-powered application that provides users with a comprehensive guide for any task by simply asking the app what they need to do. The app then creates a prompt to generate a straightforward, easy-to-understand To-Do list. One of the key features of Steps is its ability to break down a large task into smaller, more manageable steps. ",
    url: "https://github.com/Doodoal/Ignition-Hacks-2023",
    img: "assets/Result.jpg",
  },
  {
    title: "ChatHub",
    tools: "React, Firebase",
    describe:
      "Introducing my Real-Time Chat Application, a project I developed using React for the Frontend and Firebase for the Backend. This app showcases my skills in creating a seamless and user-friendly communication platform. I integrated Google authentication for user sign-in, ensuring a secure and convenient experience. Users can easily create or join chat rooms by simply entering a room name, allowing them to connect with others in real-time. To improve the user experience, I implemented cookies to store login information, enabling seamless navigation in case of page refreshes or tab switches. I also incorporated a sign-out feature to ensure user privacy and security. ",
    url: "https://github.com/urmaysuthar/React-Firebase-Realtime-Chat-App",
    img: "assets/chatroom.jpg",
  },
  {
    title: "Code Breaker Multiplayer Game",
    tools: "HTML, CSS, Javascript, JQuery",
    describe:
      "Code Breaker is an exciting and interactive web-based game that I developed as a project using technologies such as HTML, CSS, JavaScript and jQuery. The game invites players to use their logical and analytical skills to figure out a hidden pattern of multi-colored balls by making a series of guesses. As the creator, I designed the gameplay to involve users submitting their guesses, receiving feedback on the accuracy of their attempts, and continuing to guess until they successfully crack the code. I hosted the game on a reliable server and skillfully implemented both client and server-side components, allowing users to enjoy multiple game attempts and a smooth gaming experience.",
    url: "https://github.com/urmaysuthar/Code-Breaker",
    img: "assets/code-breaker-resize.jpg",
  },
  {
    title: "Hotel Webapp",
    tools: "React, AWS, AWS Lambda, DynamoDB, JSON, ",
    describe:
      "Introducing my Hotel WebApp,  a user-friendly hotel booking platform developed using React for the Frontend and AWS services for the Backend. This project highlights my ability to create dynamic and responsive web applications using modern technologies. I leveraged React for efficient component loading, ensuring a seamless user experience, and hosted the app on AWS Amplify for reliable scalability. Data management was streamlined by replacing static data with JSON components and utilizing DynamoDB, a fast and flexible NoSQL database service. To ensure smooth communication between the Frontend and Backend, I integrated AWS Lambda functions with REST API Gateway. The Hotel WebApp offers users an effortless experience in searching for available rooms, viewing detailed information, and making reservations, all within a secure and high-performance platform.",
    url: "https://github.com/urmaysuthar/Landon-Hotel-Webapp/tree/master",
    img: "assets/landon.jpg",
  },
];
