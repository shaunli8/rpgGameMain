class Sprite {
  constructor(config) {

    //Set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.id = config.id;
    this.image.sizex = config.sizex;
    this.image.sizey = config.sizey;
    this.image.alive = config.alive;
    this.image.onload = () => {
      this.isLoaded = true;
    }

    //Shadow
    this.shadow = new Image();
    this.useShadow = true; //config.useShadow || false
    if (this.useShadow) {
      this.shadow.src = "https://tianbinliu.github.io/CSA-FinalProject/images/character/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    }

    //blood
    this.blood = new Image();
    this.blooduse = true;
    if (this.blooduse) {
      this.blood.src = "https://tianbinliu.github.io/CSSE-Tri1-FinalProject/images/effect/Blood.png";
    }
    this.blood.onload = () => {
      this.isBloodLoaded = true;
    }

    //Configure Animation & Initial State
    this.animations = config.animations || {
      "hero-idle-right": [[7, 0], [8, 0], [9, 0],],
      "hero-idle-left": [[6, 0], [5, 0], [4, 0],],
      "hero-walk-left": [[5, 1], [4, 1], [3, 1], [2, 1], [1, 1],],
      "hero-walk-right": [[8, 1], [9, 1], [10, 1], [11, 1], [12, 1],],
      "hero-attack-left": [[6, 7], [5, 7], [4, 6], [3, 6], [2, 6], [1, 6], [0, 6],],
      "hero-attack-right": [[7, 7], [8, 7], [9, 6], [10, 6], [11, 6], [12, 6], [13, 6],],
      "hero-attackcrescent-right": [[11, 7], [12, 7], [13, 7], [8, 8], [9, 8],],
      "hero-attackupslash-right": [[8, 14], [8, 15], [9, 14], [10, 14], [11, 14],],
      "hero-attackflurry-right": [[7, 7], [8, 7], [9, 7], [10, 15], [9, 14], [10, 14], [11, 14],[11, 7], [12, 7], [13, 7], [8, 8], [9, 8],],
      "hero-attackcrescent-left": [[2, 7], [1, 7], [0, 7], [5, 8], [4, 8],],
      "hero-attackupslash-left": [[2,14],[5, 14], [5, 15], [4, 14], [3, 14], [2, 14],],
      "hero-attackflurry-left": [[6, 7], [5, 7], [4,7], [3,7], [4,14],[3,14],[2,14],[2, 7], [1, 7], [0, 7], [5, 8], [4, 8],],
      
      
      
      "npcA-idle-right": [[0, 3], [1, 3],],
      "npcA-idle-left": [[0, 2], [1, 2],],
      "npcA-idle-up": [[0, 1], [1, 1],],
      "npcA-idle-down": [[0, 0], [1, 0],],
      "npcA-walk-right": [[2, 3], [3, 3],],
      "npcA-walk-left": [[2, 2], [3, 2],],
      "npcA-walk-up": [[2, 1], [3, 1],],
      "npcA-walk-down": [[2, 0], [3, 0],],
      "slime-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime2-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime2-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime2-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime2-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime2-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime2-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime3-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime3-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime3-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime3-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime3-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime3-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime4-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime4-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime4-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime4-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime4-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime4-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime5-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime5-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime5-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime5-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime5-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime5-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime6-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime6-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime6-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime6-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime6-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime6-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime7-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime7-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime7-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime7-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime7-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime7-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime8-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime8-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime8-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime8-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime8-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime8-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime9-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime9-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime9-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime9-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime9-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime9-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime10-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime10-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime10-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime10-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime10-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime10-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "slime11-idle-right": [[0, 0], [1, 0], [2, 0],[3, 0],],
      "slime11-idle-left": [[6, 5], [5, 5], [4, 5],[3, 5],],
      "slime11-walk-right": [[0, 1], [1, 1], [2, 1],[3, 1],[4, 1],[5, 1],],
      "slime11-walk-left": [[6, 6], [5, 6], [4, 6],[3, 6],[2, 6],[1, 6],],
      "slime11-attack-right": [[0, 2], [1, 2], [2, 2],[3, 2],[4, 2],[5, 2],[6, 2],],
      "slime11-attack-left": [[6, 7], [5, 7], [4, 7],[3, 7],[2, 7],[1, 7],[0, 7],],
      "marketplace-idle-right":[[0,0]],
    }
    this.currentAnimation = config.currentAnimation || (this.image.id + "-idle-right");
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 16;
    this.animationFrameProgress = this.animationFrameLimit;


    //Reference the game object
    this.gameObject = config.gameObject;


  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame]
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }


  updateAnimationProgress() {
    //Downtick frame progress
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress -= 1;
      return;
    }

    //Reset the counter
    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame += 1;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0
    }


  }


  draw(ctx, cameraPerson) {
    const x = this.gameObject.x + utils.withGrid(9.5) - cameraPerson.x;
    const y = this.gameObject.y - 18 + utils.withGrid(6) - cameraPerson.y;
    if (this.image.id === "npcA") {
      if (this.image.alive) {
        this.isShadowLoaded && ctx.drawImage(this.shadow,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
      else if (!this.image.alive) {
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }
    if (this.image.id === "hero") {
      if (this.image.alive) {
        this.isShadowLoaded && ctx.drawImage(this.shadow,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
      else {
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }
    if (this.image.id === "slime") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime2") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime3") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime4") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime5") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime6") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime7") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime8") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime9") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime10") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    if (this.image.id === "slime11") {
      if (!this.image.alive){
        this.isBloodLoaded && ctx.drawImage(this.blood,
          0, 0,
          32, 32,
          x, y,
          this.image.sizex, this.image.sizey
        );
      }
    }

    const [frameX, frameY] = this.frame;

    if (this.image.id === "hero") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "npcA") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime2") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime3") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime4") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime5") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime6") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime7") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime8") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime9") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime10") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "slime11") {
      if (this.image.alive) {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex, this.image.sizey,
        );
      }
    }

    if (this.image.id === "marketplace") {
        this.isLoaded && ctx.drawImage(this.image,
          frameX * this.image.sizex, frameY * this.image.sizey,
          this.image.sizex, this.image.sizey,
          x, y,
          this.image.sizex/5, this.image.sizey/5,
        );
    }
    this.updateAnimationProgress();
  }

}
