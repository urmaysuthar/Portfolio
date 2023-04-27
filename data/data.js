
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
            icon: "fa fa-github-alt",   // find other icon in https://fontawesome.com/v4.7/icons/
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
        img: "assets/python.svg",  // card image  > insert the svg image in the assets folder
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
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",  // url of the Github repository
        img: "assets/code-breaker-resize.jpg"  //image Project
    },
    {
        title: "PROJECT TITLE",
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",
        img: "assets/project1.jpg"
    },
    {
        title: "PROJECT TITLE",
        describe: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam veritatis iusto reiciendisquos, delectus in deserunt harum a. Rerum similique corporis sit odit error incidunt distinctio consectetur neque, cum illum?",
        url: "#",
        img: "assets/project1.jpg"
    }
]








