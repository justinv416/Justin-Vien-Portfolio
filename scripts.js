//Anime.js title animation
// let titleAnimation = anime({
//     targets: 'h1',
//     translateY: -100
// })


const projects = [
    {
        name: "JS-Hero",
        description: `A quiz game that features a set of 14 javascript trivia questions.
                    Upon a correct answer users will see a attack animation indicating the enemy is defeated,
                    and a respective take damage animation if the user gets the question wrong.
                    I designed the UI with inspiration from old final fantasy RPGs. `,
        image: "./assets/JS-Hero.png",
        stack: "This project was built with: HTML5, CSS3, jQuery, and Howler.js.",
        source: "https://github.com/justinv416/JS-Hero",
        liveLink: "https://jshero.netlify.app"
    },
    {
        name: "Art Unlimited",
        description: `A website that utilizes the Art Institute of Chicago's API which allows users to to generate 
                    random or search for artworks for inspiration or their viewing pleasure. This app features API loading animations, and an opening 
                    animation created with Green Sock Animation Plugin and pagination for the search results.`,
        image: "./assets/Art-Unlimited.png",
        stack: "This project was built with: HTML5, CSS3, jQuery, and GSAP",
        source: "https://github.com/justinv416/Art-Unlimited",
        liveLink: "https://artunlimited.netlify.app"
    },
    {
        name: "Reel Good Films",
        description: `Reel Good Films is a website is a pair-programming project that I built with Mark Duffy. 
                    This website utilizes The Movie Database API that allows users to search for movies from their database or
                    discover popular movies based on a selected year or genre.`,
        image: "./assets/Reel-Good-Films.png",
        stack: "This project was built with: HTML5, CSS3, Vanilla JS, and ES6.",
        source: "https://github.com/MarkAndJustin/ReelGoodFilms",
        liveLink: "https://reelgoodfilms.netlify.app/"
    },
    {
        name: "Creative",
        description: `Creative is a multi-page website converted from a PSD file. 
                    This website is fully responsive with mobile navigation, a fully functional image slider
                    on the home page, and  the ability to allow users to write comments on the blog page.`,
        image: "./assets/Creative.png",
        stack: "This project was built with: HTML5, SASS, Vanilla JS",
        source: "https://github.com/justinv416/Agency-Creative",
        liveLink: "https://agency-creative.netlify.app/"
    },
    {
        name: "Shoppable",
        description: `Shoppable is a e-commerce site that allows users to shop for products. 
                    This project features a dedicated product page, the ability for users to add and remove items 
                    from a cart component which persists over sessions with the integration of firebase.`,
        image: "./assets/Shoppable.png",            
        stack: "This project was built with: React, CSS3, Firebase",
        source: "https://github.com/justinv416/JustinVien-ProjectThree",
        liveLink: "https://thebettershoppable.netlify.app/"
    },
    {
        name: "Bite-Sized Travelling",
        description: `Bite-Sized Travelling is a agency style group React project that allows users to create a trip. 
                    On a separate page users can then search for a location or city and populate restaurants which they
                    can then add to their itinerary. Users can also add notes on the restaurant and modify their trip by add new restaurants or deleting them. `,
        image: "./assets/Bite-Sized-Traveling.png",            
        stack: "This project was built with: React, CSS3, Firebase",
        source: "https://github.com/BiteSizedTravelling/Project4",
        liveLink: "https://bite-sized-travel-project.netlify.app"
    },
];



const displayProject = (page) => {
    document.querySelector('.projectHeading').textContent = projects[page].name;
    document.querySelector('.projectDescription').textContent = projects[page].description;
    document.querySelector('.projectImage').src = projects[page].image;
    document.querySelector('.projectStack').textContent = projects[page].stack;
    document.querySelector('.sourceLink').href = projects[page].source;
    document.querySelector('.liveLink').href = projects[page].liveLink;
    document.querySelector('.stepNumber').textContent = page + 1;
}

//Controls for the image carousel.
const sliderControls = (page) => {
    //Maybe use event.target to dry up code
    //Controls left arrow
    document.querySelector('.fa-chevron-left').addEventListener('click', () => {
        if(page <= 0 ){
            page = projects.length;
            page--;
        } else  {
            page--;
        }
        displayProject(page);
    });
    //Controls right arrow. 
    document.querySelector('.fa-chevron-right').addEventListener('click', () => {
        if(page >= projects.length - 1) {
            page = 0;
        } else {
            page++;
        }
        displayProject(page)
    });
}

const navControl = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        console.log('adfadfaf')
        document.querySelector('.mobileNav').classList.toggle('opened')
    })
}

// const navScrollPosition = () => {
//     window.addEventListener('scroll', () => {
//         if(this.scrollY > 0) {
//             document.querySelector('nav').style.position= 'fixed';
//         }
//     })
// } 

//Changing the color of navbar if window is scrolled past initial position.
// navApp.changeNavColor = function(){
//     window.addEventListener('scroll', function(){
//         const navigationMain = document.querySelector('.navigation');
//         if(this.scrollY > 0) {
//             navigationMain.classList.add('navigation__color');
//         } else {
//             navigationMain.classList.remove('navigation__color');
//         };
//     });
// };

const init = () => {
    // displayProject();
    sliderControls(0)
    navControl();
    navScrollPosition();
}

init();
