export class Videogame {
  constructor(title, price, console, genre) {
    this.title = title;
    this.price = price;
    this.console = console;
    this.genre = genre;
  }

  static getVideogamegameConsole(console) {
    let texto = "Error";

    switch (console) {
      case Videogame.CON_XBOX:
        texto = "Xbox 360";
        break;
      case Videogame.CON_PS4:
        texto = "PlayStation 4";
        break;
      case Videogame.CON_SWITCH:
        texto = "Nintendo Switch";
        break;
      case Videogame.CON_PC:
        texto = "PC";
        break;
    }
    return texto;
  }

  static getVideogameGenre(genre) {
    let texto = "Error";

    switch (genre) {
      case Videogame.GEN_ACTION:
        texto = "Acción";
        break;
      case Videogame.GEN_PLAT:
        texto = "Plataforma";
        break;
      case Videogame.GEN_FPS:
        texto = "Shooter";
        break;
      case Videogame.GEN_ROL:
        texto = "Rol";
        break;
      case Videogame.GEN_ADV:
        texto = "Aventura";
        break;
      case Videogame.GEN_SPORT:
        texto = "Deporte";
        break;
      case Videogame.GEN_STR:
        texto = "Estrategia";
        break;
    }
    return texto;
  }
}

Videogame.CON_XBOX = 1;
Videogame.CON_PS4 = 2;
Videogame.CON_SWITCH = 3;
Videogame.CON_PC = 4;

Videogame.GEN_ACTION = 1;
Videogame.GEN_PLAT = 2;
Videogame.GEN_FPS = 3;
Videogame.GEN_ROL = 4;
Videogame.GEN_ADV = 5;
Videogame.GEN_SPORT = 6;
Videogame.GEN_STR = 7;
