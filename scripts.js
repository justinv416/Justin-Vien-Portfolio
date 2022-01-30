//Anime.js title animation
// let titleAnimation = anime({
//     targets: 'h1',
//     translateY: -100
// })


const projects = [
    {
        name: "JS-Hero",
        description: `A quiz game that features a set of 14 javascript trivia questions.
                    Upon a correct answer users will see a attack animation indicating the enemey is defeated,
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
];



const displayProject = (count) => {
    document.querySelector('.projectHeading').textContent = projects[count].name;
    document.querySelector('.projectDescription').textContent = projects[count].description;
    document.querySelector('.projectImage').src = projects[count].image;
    document.querySelector('.projectStack').textContent = projects[count].stack;
    document.querySelector('.sourceLink').href = projects[count].source;
    document.querySelector('.liveLink').href = projects[count].liveLink;
}

//Controls for the image carousel.
const sliderControls = (count) => {
    document.querySelector('.fa-chevron-left').addEventListener('click', () => {
        if(count === 0){
            count === 0;
        } else {
            count--;
        }
        displayProject(count);
    });
    document.querySelector('.fa-chevron-right').addEventListener('click', () => {
        count++;
        console.log(count)
        displayProject(count)
    });
}

const init = () => {
    // displayProject();
    sliderControls(0)
}

init();
