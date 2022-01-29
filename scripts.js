//Anime.js title animation
let titleAnimation = anime({
    targets: 'h1.from-to-values',
    opacity: [0, 1],
})


const projects = [

];

const projectOne = {
    name: "JS Hero",
    description: "A simple javascript quiz game.",
    image: "./assets/JS-Hero.png",
    source: "https://github.com/justinv416/JS-Hero",
    liveLink: "https://jshero.netlify.app"
}

const projectTwo = {
    name: "Art Unlimited",
    description: "A art generator.",
    image: "./assets/Art-Unlimited.png",
    source: "https://github.com/justinv416/Art-Unlimited",
    liveLink: "https://artunlimited.netlify.app"
}

const displayProject = () => {
    document.querySelector('.projectHeading').textContent = projectOne.name;
    document.querySelector('.projectDescription').textContent = projectOne.description;
    document.querySelector('.projectImage').src = projectOne.image;
}

//Controls for the image carousel.
const sliderControls = () => {
    document.querySelector('.fa-chevron-left').addEventListener('click', () => {
        console.log('clicked')
    });
    document.querySelector('.fa-chevron-right').addEventListener('click', () => {
        console.log('clicked')
    });
}

const init = () => {
    displayProject();
    sliderControls();
}

init();
