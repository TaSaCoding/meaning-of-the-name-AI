function generateName(event) {
  event.preventDefault();
  new Typewriter("#name-definition", {
    strings: "definition my name",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let nameFormElement = document.querySelector("name-generator");
nameFormElement.addEventListener("submit", generateName);
