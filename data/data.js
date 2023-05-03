
export const introductionData = {
    
    yourName: "Urmay Suthar", 
    socialNetwork: [
        {
            icon: "fa fa-envelope-o",  // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Email",  // label name
            url: "https://mail.google.com/mail/?view=cm&source=mailto&to=[urmay.suthar0100@gmail.com]"  //  url of the Social Network
        },
        {
            icon: "fa fa-linkedin-square", // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Linkedin",
            url: "https://www.linkedin.com/in/urmaysuthar/"
        },
        {
            icon: "fa fa-github",   // find other icon in https://fontawesome.com/v4.7/icons/
            nameSocialNetwork: "Github",
            url: "https://github.com/urmaysuthar"
        }


    ],

    // Page session direction
    nav: [
        {
            optionNav: "About me",
            idSection: "about"    // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Skills",
            idSection: "skills"   // If it changes, check the session id in <index.html> ;
        },
        {
            optionNav: "Projects",
            idSection: "projects"  // If it changes, check the session id in <index.html> ;
        }


    ]

}


//=========================================
//                ABOUT ME
//=========================================
export const aboutMeData = {
    title: "About Me",
    description: "Hey there! I'm Urmay, a warm and enthusiastic software developer who believes in the power of code to simplify and enrich our everyday experiences. As a computer science student, I have a strong passion for problem-solving and crafting innovative, tangible solutions using my trusty keyboard. I've mastered a variety of programming languages, including Java, HTML, CSS, and JavaScript, to name a few. I'm always eager to expand my technical prowess, whether that means delving deeper into the languages I already know or exploring new languages and frameworks. In pursuit of a capable coder with a heartfelt enthusiasm for the ever-changing tech landscape?, look no further! Beyond my technical expertise, I pride myself on being a natural leader with exceptional communication skills, making collaboration a breeze. Let's join forces and create something extraordinary together. Are you ready to embark on this exciting journey?",
    titleURL: "View Resume",
    urlCV: "https://drive.google.com/file/d/1L0lpXrSJ1Ke5IJjArao_TUtXVjW58Jk5/view?usp=share_link"
}

//=========================================
//                 SKILLS 
//=========================================
export const skillsData = [

    {
        img: "assets/java.svg",
        nameSkill: "Java"
    },
    {
        img: "assets/python.svg",  
        nameSkill: "Python"      
    },
    {
        img: "assets/js.svg",
        nameSkill: "JavaScript"
    },
    {
        img: "assets/html-icon.svg",
        nameSkill: "HTML"
    },
    {
        img: "assets/css-icon.svg",
        nameSkill: "CSS"
    },
    {
        img: "assets/c-program-icon.svg",
        nameSkill: "C"
    },
    {
        img: "assets/mysql-icon.svg",
        nameSkill: "SQL"
    },
    {
        img: "assets/git-icon.svg",
        nameSkill: "Git"
    },
    {
        img: "assets/firebase-svgrepo-com.svg",
        nameSkill: "Firebase"
    },
    {
        img: "assets/c++.svg",
        nameSkill: "C++"
    },
    {
        img: "assets/react.svg",
        nameSkill: "React"
    },
    {
        img: "assets/aws.svg",
        nameSkill: "AWS"
    },
    {
        img: "assets/git-hub.svg",
        nameSkill: "Github"
    }

    


]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    
    {
        title: "Realtime Chat WebApp",
        tools: "React, Firebase",
        describe: "Introducing my Real-Time Chat Application, a project I developed using React for the Frontend and Firebase for the Backend. This app showcases my skills in creating a seamless and user-friendly communication platform. I integrated Google authentication for user sign-in, ensuring a secure and convenient experience. Users can easily create or join chat rooms by simply entering a room name, allowing them to connect with others in real-time. To improve the user experience, I implemented cookies to store login information, enabling seamless navigation in case of page refreshes or tab switches. I also incorporated a sign-out feature to ensure user privacy and security. ",
        url: "https://github.com/urmaysuthar/React-Firebase-Realtime-Chat-App",
        img: "assets/chatroom.jpg"
    },
    {
        title: "Code Breaker Multiplayer Game",    
        tools: "HTML, CSS, Javascript, JQuery",
        describe: "Code Breaker is an exciting and interactive web-based game that I developed as a project using technologies such as HTML, CSS, JavaScript and jQuery. The game invites players to use their logical and analytical skills to figure out a hidden pattern of multi-colored balls by making a series of guesses. As the creator, I designed the gameplay to involve users submitting their guesses, receiving feedback on the accuracy of their attempts, and continuing to guess until they successfully crack the code. I hosted the game on a reliable server and skillfully implemented both client and server-side components, allowing users to enjoy multiple game attempts and a smooth gaming experience.",
        url: "https://github.com/urmaysuthar/Code-Breaker",  // url of the Github repository
        img: "assets/code-breaker-resize.jpg"  
    },
    {
        title: "Hotel Website",
        tools: "React, AWS, AWS Lambda, DynamoDB, JSON, ",
        describe: "In a faraway land, where the sun never set and the moon always shone brightly, there was a mystical forest inhabited by magical creatures and ruled by a wise and benevolent queen named Aurelia. One day, a young orphan boy named Jasper, who had been raised by a family of kind-hearted gnomes, discovered a hidden portal that led to this enchanted realm. Upon entering the forest, Jasper was greeted by a chorus of singing flowers and a friendly centaur named Thistle, who offered to be his guide through the magical land. As they journeyed deeper into the forest, Jasper and Thistle encountered a myriad of extraordinary beings, including a sassy talking cat named Whiskers, a lovable yet clumsy giant named Gulliver, and a mischievous fairy named Sparkle.",
        url: "#",
        img: "assets/landon.jpg"
    },
    {
        title: "Project",
        tools: "Tools ",
        describe: "In a faraway land, where the sun never set and the moon always shone brightly, there was a mystical forest inhabited by magical creatures and ruled by a wise and benevolent queen named Aurelia. One day, a young orphan boy named Jasper, who had been raised by a family of kind-hearted gnomes, discovered a hidden portal that led to this enchanted realm. Upon entering the forest, Jasper was greeted by a chorus of singing flowers and a friendly centaur named Thistle, who offered to be his guide through the magical land. As they journeyed deeper into the forest, Jasper and Thistle encountered a myriad of extraordinary beings, including a sassy talking cat named Whiskers, a lovable yet clumsy giant named Gulliver, and a mischievous fairy named Sparkle.",
        url: "#",
        img: "assets/project1.jpg"
    }
]








