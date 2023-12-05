
class Overworld {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      // Clear off the canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Establish the camera person
      const cameraPerson = this.map.gameObjects.hero;

      // Update all objects
      Object.values(this.map.gameObjects).forEach(object => {
        object.update({
          map: this.map,
        });
      });

      // Draw Lower layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // Draw Game Objects
      Object.values(this.map.gameObjects).sort((a, b) => {
        return a.y - b.y;
      }).forEach(object => {
        object.sprite.draw(this.ctx, cameraPerson);
      });

      // Draw Upper layer
      this.map.drawUpperImage(this.ctx, cameraPerson);

      if(Battle){
        this.map.battle();
      }

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  bindActionInput() {
    const resumeButton = document.getElementById("resumeButton");

    const pauseGame = () => {
      this.map.checkForPause();
    };

    resumeButton.addEventListener("click", pauseGame);

    new KeyPressListener("Enter", () => {
      // Is there a person here to talk to?
      this.map.checkForActionCutscene();
    });
    new KeyPressListener("Escape", () => {
      this.map.checkForPause();
    });
    if (canMove) {
      new KeyPressListener("Space", () => {
        if(!Battle){
          this.map.checkForBattle();
        }
        else if (Battle && heroTurn){

        }
      });
    }
  }

  startMap(mapConfig) {
    this.map = new OverworldMap(mapConfig);
    this.map.overworld = this;
    this.map.mountObjects();
  }

  init() {
    this.startMap(window.OverworldMaps.DemoRoom);
    this.bindActionInput();
    this.startGameLoop();

    this.map.startCutscene([
      { type: "textMessage", text: "Altairius | Shafted Plains | 1500 N.C.E." },
      { type: "textMessage", text: "Ten years ago, monsters and humans fought each other in the great war of 1490." },
      { type: "textMessage", text: "Despite humanity's best efforts, the monsters decimated them." },
      { type: "textMessage", text: "With planets overrun by the new reign of the monsters." },
      { type: "textMessage", text: "What used to be a golden age and order is now anarchy and the dark ages." },
      { type: "textMessage", text: "With no one to fight the oppression of the monsters, it can only be one to fight them, and that one being you..." },
      { type: "textMessage", text: "Merlin." },
    ]);
  }
}
