//Anime.js title animation
let titleAnimation = anime({
    targets: 'h1.from-to-values',
    opacity: [0, 1],
})


const projects = [];

const project = {
    name: "JS Hero",
    description: "A simple javascript quiz game.",
    image: "./assets/JS-Hero.png"
}

const displayProject = () => {
    document.querySelector('.projectHeading').textContent = project.name;
}

displayProject()