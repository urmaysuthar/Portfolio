
export const introductionData = {
    // Hi, my name is....
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
    description: "Hello, my name is Urmay and I'm a Computer Science student that is interested in Software Engineering. I was drawn into this industry because I enjoy solving problems and making something tangible using code. So far, I've mastered a few programming languages, including Java, HTML, CSS, and JavaScript and more. Making CPU Algorithms is one of my favourite projects. It actually helped me improve my C abilities and challenged me to solve a problem using a new language. I'm constantly attempting to enhance my technical skills, and right now I'm concentrating on mastering the languages I know as well as learning new languages and frameworks.",
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
    }
    


]
//=========================================
//                PROJECTS
//=========================================
export const projectsData = [
    {
        title: "Code Breaker Multiplayer Game",    // card image  > insert the svg image in the assets folder
        describe: "Code Breaker is an exciting and interactive web-based game that I developed as a project using advanced technologies such as HTML, CSS, JavaScript, and jQuery. The game invites players to use their logical and analytical skills to figure out a hidden pattern of multi-colored balls by making a series of guesses. As the creator, I designed the gameplay to involve users submitting their guesses, receiving feedback on the accuracy of their attempts, and continuing to guess until they successfully crack the code. I hosted the game on a reliable server and skillfully implemented both client and server-side components, allowing users to enjoy multiple game attempts and a smooth gaming experience.",
        url: "https://github.com/urmaysuthar/Code-Breaker",  // url of the Github repository
        img: "assets/code-breaker-resize.jpg"  //image Project
    },
    {
        title: "PROJECT TITLE",
        describe: "Once upon a time, in a quaint little village nestled between the rolling hills and the sparkling river, there lived a peculiar old man named Archibald. Archibald was known far and wide for his collection of magical trinkets and his uncanny ability to communicate with the animals that roamed the surrounding forests. One fateful day, a wandering minstrel named Eloise stumbled upon Archibald's hidden abode and, captivated by his enchanting tales, decided to stay and learn from the wise old man. Together, they embarked on a thrilling adventure to retrieve the legendary Golden Acorn, a mythical treasure said to grant its possessor the power to control the very fabric of time. ",
        url: "#",
        img: "assets/project1.jpg"
    },
    {
        title: "PROJECT TITLE",
        describe: "In a faraway land, where the sun never set and the moon always shone brightly, there was a mystical forest inhabited by magical creatures and ruled by a wise and benevolent queen named Aurelia. One day, a young orphan boy named Jasper, who had been raised by a family of kind-hearted gnomes, discovered a hidden portal that led to this enchanted realm. Upon entering the forest, Jasper was greeted by a chorus of singing flowers and a friendly centaur named Thistle, who offered to be his guide through the magical land. As they journeyed deeper into the forest, Jasper and Thistle encountered a myriad of extraordinary beings, including a sassy talking cat named Whiskers, a lovable yet clumsy giant named Gulliver, and a mischievous fairy named Sparkle.",
        url: "#",
        img: "assets/project1.jpg"
    }
]








