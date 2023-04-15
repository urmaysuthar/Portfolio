
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
    title: "Example",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ratione harum sapiente ipsum maiores, blanditiis atque magni quam, quia quas hic deserunt rem aliquam. Error earum ab modi porro at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sunt veniam, eligendi modi similique tempore accusamus dolore, nobis non facilis quos veritatis officia eveniet molestias libero quisquam sed doloremque fugit!",
    titleURL: "View CV",
    urlCV: "#"
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
        img: "assets/code-breaker.jpg"  //image Project
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








