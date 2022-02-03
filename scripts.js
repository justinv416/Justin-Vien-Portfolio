//Look into splt.js and intersection observer api for text animation and on scroll 
const app = {}

//Splt.js animation
 app.splitText = splt({
    reveal: true
});

app.splitTextAnimate = () => anime({
    targets: '.reveal .aboutMeHeading',
  translateY: [100, 0],
  direction: 'alternate',
  loop: 0,
  delay: anime.stagger(40),
  easing: 'cubicBezier(.71,-0.77,.43,1.67)',
})

//Anime.js animation timeline
app.titleTimeline = anime.timeline({
  targets: '.reveal',
  translateY: [100, 0],
  direction: 'alternate',
  loop: 0,
  delay: anime.stagger(40),
  easing: 'cubicBezier(.71,-0.77,.43,1.67)',
});

app.titleTimeline.add({
    targets: '.navLinks',
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'spring(1, 80, 10, 0)'
}, '+=100').add({
    targets: '.headerRole',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 100,
    easing: 'spring(1, 80, 10, 0)'
}, '-=1000').add({
    targets: '.linkToSection', 
    opacity: [0, 1],
    translateY: [20, 0],
}, '-=2000');


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target)
        }
    })
}
const myObserver = new IntersectionObserver(callback, options)


const aboutImage = document.querySelector('.aboutMeHeading')

myObserver.observe(aboutImage)

app.projects = [
    {
        name: "JS-Hero",
        description: `A quiz game that features a set of 14 javascript trivia questions.
                    Upon a correct answer users will see a attack animation indicating the enemy is defeated,
                    and a respective take damage animation if the user gets the question wrong.
                    I designed the UI with inspiration from old final fantasy RPGs. `,
        image: "./assets/JS-Hero.webp",
        video: "./assets/JS-Hero-Demo.webm",
        stack: "HTML5, CSS3, jQuery, vanilla JS(OOP), and Howler.js.",
        source: "https://github.com/justinv416/JS-Hero",
        liveLink: "https://jshero.netlify.app"
    },
    {
        name: "Art Unlimited",
        description: `A website that utilizes the Art Institute of Chicago's API which allows users to to generate 
                    random or search for artworks for inspiration or their viewing pleasure. This app features API loading animations, and an opening 
                    animation created with Green Sock Animation Plugin and pagination for the search results.`,
        image: "./assets/Art-Unlimited.webp",
        video: "./assets/Art Unlimited-Demo.webm",
        stack: "HTML5, CSS3, jQuery, and GSAP",
        source: "https://github.com/justinv416/Art-Unlimited",
        liveLink: "https://artunlimited.netlify.app"
    },
    {
        name: "Reel Good Films",
        description: `Reel Good Films is a website is a pair-programming project that I built with Mark Duffy. 
                    This website utilizes The Movie Database API that allows users to search for movies from their database or
                    discover popular movies based on a selected year or genre.`,
        image: "./assets/Reel-Good-Films.webp",
        video: "./assets/Reel Good Films-Demo.webm",
        stack: "HTML5, CSS3, Vanilla JS, and ES6.",
        source: "https://github.com/MarkAndJustin/ReelGoodFilms",
        liveLink: "https://reelgoodfilms.netlify.app/"
    },
    {
        name: "Creative",
        description: `Creative is a multi-page website converted from a PSD file. 
                    This website is fully responsive with mobile navigation, a fully functional image slider
                    on the home page, and  the ability to allow users to write comments on the blog page.`,
        video: "./assets/Creative -Demo.webm",
        image: "./assets/Creative.webp",
        stack: "HTML5, SASS, CSS grid, BEM methodology, and Vanilla JS",
        source: "https://github.com/justinv416/Agency-Creative",
        liveLink: "https://agency-creative.netlify.app/"
    },
    {
        name: "Shoppable",
        description: `Shoppable is a e-commerce site that allows users to shop for products. 
                    This project features a dedicated product page, the ability for users to add and remove items 
                    from a cart component.`,
        video: "./assets/Shoppable-Demo.webm",
        image: "./assets/Shoppable.webp",            
        stack: "React, CSS3",
        source: "https://github.com/justinv416/JustinVien-ProjectThree",
        liveLink: "https://thebettershoppable.netlify.app/"
    },
];



app.displayProject = (page) => {
    document.querySelector('.projectHeading').textContent = app.projects[page].name;
    document.querySelector('.projectDescription').textContent = app.projects[page].description;
    document.querySelector('.projectImage').src = app.projects[page].image;
    document.querySelector('.projectStack').innerHTML = `<span class="bold">This project was built with: </span> ${app.projects[page].stack}`;
    document.querySelector('.sourceLink').href = app.projects[page].source;
    document.querySelector('.liveLink').href = app.projects[page].liveLink;
    document.querySelector('.stepNumber').textContent = page + 1;
    document.querySelector('.projectVideo').src = app.projects[page].video;
}

//Controls for the image carousel.
app.sliderControls = (page) => {
    //Controls left arrow
    document.querySelector('.fa-chevron-left').addEventListener('click', () => {
        if(page <= 0 ){
            page = app.projects.length;
            page--;
        } else  {
            page--;
        }
        app.displayProject(page);
    });
    //Controls right arrow. 
    document.querySelector('.fa-chevron-right').addEventListener('click', () => {
        if(page >= app.projects.length - 1) {
            page = 0;
        } else {
            page++;
        }
        app.displayProject(page)
    });
}

app.navControl = () => {
    document.querySelector('.mobileNavIcons').addEventListener('click', () => {
        //Change accompanying aria label as well
        let mobileNavIcon = document.querySelector('.fa-bars');
        mobileNavIcon.classList.toggle('fa-times');
        document.querySelector('.mobileNav').classList.toggle('opened')
    })
}

app.init = () => {
    // displayProject();
    app.sliderControls(0)
    app.navControl();
}

app.init();
