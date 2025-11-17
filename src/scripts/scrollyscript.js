// NO D3 – just vanilla JS
const main = document.querySelector("main");
const scrolly = document.querySelector("#scrolly");
const pipe = document.querySelector("#center-image");
const figure = scrolly.querySelector("figure");
const article = scrolly.querySelector("article");
const steps = Array.from(article.querySelectorAll(".step"));

let lastStepIndex;
let numImageSteps;

// initialize the scrollama
const scroller = scrollama();

function handleResize() {
    steps.forEach(step => {
        step.style.height = "auto";
    });
    figure.style.height = window.innerHeight + "px";
    scroller.resize();
}

function handleStepEnter(response) {
    // highlight active step
    steps.forEach((el, i) => {
        el.classList.toggle("is-active", i === response.index);
    });

    // clamp so invisible step still uses last image
    const currentStep = Math.min(response.index + 1, numImageSteps);

    // switch background images
    const imgs = figure.querySelectorAll("img");
    imgs.forEach(img => {
        const stepNum = Number(img.getAttribute("data-step"));
        img.classList.toggle("active", stepNum === currentStep);
    });

    // show/hide the pipe only on desktop (>= 900px)
    if (window.innerWidth >= 900) {
        pipe.classList.add("visible");
    } else {
        pipe.classList.remove("visible");
    }
}

function handleStepExit(response) {
    // leaving the very first step going UP → above scrolly
    const leavingTop = response.index === 0 && response.direction === "up";
    // leaving the invisible step (last step) going DOWN → below scrolly
    const leavingBottom = response.index === lastStepIndex - 1 && response.direction === "down";

    if (leavingTop || leavingBottom) {
        const imgs = figure.querySelectorAll("img");
        imgs.forEach(img => img.classList.remove("active"));
        pipe.classList.remove("visible");
    }
}

function init() {
    handleResize();

    // total steps (including invisible one)
    lastStepIndex = steps.length - 1;
    // number of images (1–10)
    numImageSteps = figure.querySelectorAll("img").length;

    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.33,
            debug: false
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", init);
