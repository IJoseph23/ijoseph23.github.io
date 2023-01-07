const title = document.getElementById("title");
const introductionH = document.getElementById("introductionH");
const educationH = document.getElementById("educationH");
const aboutH = document.getElementById("aboutH");
const projectsH = document.getElementById("projectsH");
const interestsH = document.getElementById("interestsH");
const copyright = document.getElementById("CR");
const pic = document.getElementById("githubIcon");
const delay = 1000;

introductionH.classList.add("invisible");
educationH.classList.add("invisible");
aboutH.classList.add("invisible");
projectsH.classList.add("invisible");
interestsH.classList.add("invisible");
copyright.classList.add("invisible");

var paragraphs = ["paraG0", "paraG1", "paraG2", "paraG3", "paraG4"];

for (i = 0; i < paragraphs.length; i++) {
  document.getElementById(paragraphs[i]).classList.add("invisible");
}

title.classList.add("titleAnimation");

title.addEventListener("animationend", () => {
  introductionH.classList.remove("invisible");
  introductionH.classList.add("headersAnimation");
  copyright.classList.remove("invisible");
  copyright.classList.add("copyrightAnimation");
});

introductionH.addEventListener("animationend", () => {
  educationH.classList.remove("invisible");
  educationH.classList.add("headersAnimation");
  document.getElementById(paragraphs[0]).classList.remove("invisible");
  document.getElementById(paragraphs[0]).classList.add("paragraphsAnimation");
});

educationH.addEventListener("animationend", () => {
  aboutH.classList.remove("invisible");
  aboutH.classList.add("headersAnimation");
  document.getElementById(paragraphs[1]).classList.remove("invisible");
  document.getElementById(paragraphs[1]).classList.add("paragraphsAnimation");
});

aboutH.addEventListener("animationend", () => {
  projectsH.classList.remove("invisible");
  projectsH.classList.add("headersAnimation");
  document.getElementById(paragraphs[2]).classList.remove("invisible");
  document.getElementById(paragraphs[2]).classList.add("paragraphsAnimation");
});

projectsH.addEventListener("animationend", () => {
  interestsH.classList.remove("invisible");
  interestsH.classList.add("headersAnimation");
  document.getElementById(paragraphs[3]).classList.remove("invisible");
  document.getElementById(paragraphs[3]).classList.add("paragraphsAnimation");
});

interestsH.addEventListener("animationend", () => {
  document.getElementById(paragraphs[4]).classList.remove("invisible");
  document.getElementById(paragraphs[4]).classList.add("paragraphsAnimation");
});

pic.addEventListener("mouseenter", () => {
  pic.classList.add("picAnimation");
});
pic.addEventListener("mouseleave", () => {
  pic.classList.remove("picAnimation");
});
