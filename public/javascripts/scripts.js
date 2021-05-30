import { Videogame } from "./VideogameClass.js";
import {
  titleInput,
  priceInput,
  consoleInput,
  genreInput,
  videogameList,
} from "./constants/constants.js";

//Events
window.addEventListener("load", () => {
  loadVideogames();
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  await submitVideogame();
});

document.querySelector("input").onclick = () => {
  resetColors();
};

document.querySelector("select").onclick = () => {
  resetColors();
};

//Functions
const submitVideogame = async () => {
  if (
    !titleInput.value ||
    !priceInput.value ||
    +consoleInput.value === 0 ||
    +genreInput.value === 0
  ) {
    resetColors();
    if (!titleInput.value) {
      titleInput.classList.add("error");
      document.getElementById("videogame-error").innerHTML =
        "Revise los campos en rojo";
    }
    if (!priceInput.value) {
      priceInput.classList.add("error");
      document.getElementById("videogame-error").innerHTML =
        "Revise los campos en rojo";
    }
    if (+consoleInput.value === 0) {
      consoleInput.classList.add("error");
      document.getElementById("videogame-error").innerHTML =
        "Revise los campos en rojo";
    }
    if (+genreInput.value === 0) {
      genreInput.classList.add("error");
      document.getElementById("videogame-error").innerHTML =
        "Revise los campos en rojo";
    }
  } else {
    const newVideogame = {
      title: titleInput.value,
      price: priceInput.value,
      console: consoleInput.value,
      genre: genreInput.value,
    };
    await fetch("http://localhost:3000/videogames/create", {
      method: "POST",
      body: JSON.stringify(newVideogame),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(console.log);
    eraseInput();
    loadVideogames();
  }
};

const resetColors = () => {
  if (titleInput.classList.contains("error")) {
    titleInput.classList.remove("error");
    document.getElementById("videogame-error").innerHTML = "";
  }
  if (priceInput.classList.contains("error")) {
    priceInput.classList.remove("error");
    document.getElementById("videogame-error").innerHTML = "";
  }
  if (consoleInput.classList.contains("error")) {
    consoleInput.classList.remove("error");
    document.getElementById("videogame-error").innerHTML = "";
  }
  if (genreInput.classList.contains("error")) {
    genreInput.classList.remove("error");
    document.getElementById("videogame-error").innerHTML = "";
  }
};

const clearList = () => {
  videogameList.innerHTML = "";
};

const loadVideogames = async () => {
  await fetch("http://localhost:3000/videogames/all")
    .then((response) => response.json())
    .then((json) => {
      paintAllVideogames(json);
    });
};

const paintAllVideogames = (json) => {
  clearList();
  json.forEach((videogame) => {
    videogameList.innerHTML += `<tr id="${videogame.id}">
        <td>${videogame.title}</td>
        <td>${videogame.price} €</td>
        <td>${Videogame.getVideogamegameConsole(+videogame.console)}</td>
        <td>${Videogame.getVideogameGenre(+videogame.genre)}</td>
        <td><button onclick="deleteVideogame('${videogame.id}')">X</button></td>
        </tr>`;
  });
};

const eraseInput = () => {
  titleInput.value = "";
  priceInput.value = "";
  consoleInput.value = 0;
  genreInput.value = 0;
  titleInput.focus();
};
