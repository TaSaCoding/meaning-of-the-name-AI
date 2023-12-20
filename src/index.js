function displayDefinition(response) {
  new Typewriter("#name-definition", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateName(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "bf33d2o4a3a21af9f8ac140tee13c0ea";
  let prompt = `User instructions: Generate the Definition of ${instructionsInput.value}`;
  let context =
    "You are an expert in Names. You know all meanings and the Definition of all names. Make sure to follow the user instructions and give a short explanation. Sign the Definition with <br/> 'SheCodes AI' inside a <em> element at the end of the Definition.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayDefinition);
}

let nameFormElement = document.querySelector("#name-generator");
nameFormElement.addEventListener("submit", generateName);
