window.addEventListener("load", function () {
  let game = new Phaser.Game({
    title: "My Fantasy: Make Your Story",
    width: 600,
    height: 900,
    type: Phaser.AUTO,
    parent: "game",
    scale: {
      mode: Phaser.Scale.ENVELOP, 
      // mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  });

  game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.image("bg-room", "assets/images/bg-room.png");
    this.load.image("bg-place1", "assets/images/bg-place1.png");
    this.load.image("bg-place2", "assets/images/bg-place2.png");

    this.load.image("man", "assets/images/man.png");
    this.load.image("man2", "assets/images/man2.png");
    this.load.image("first-text-man", "assets/images/textPaul1.png");
    this.load.image("final-text-man", "assets/images/textPaul2.png");

    this.load.image("girl1", "assets/images/girl1.png");
    this.load.image("girl2", "assets/images/girl2.png");

    this.load.image("girl-dress1", "/assets/images/girl-dress1.png");
    this.load.image("girl-dress1-bag1", "/assets/images/girl-dress1-bag1.png");
    this.load.image(
      "girl-dress1-bag1-accessory1",
      "/assets/images/girl-dress1-bag1-accessory1.png"
    );
    this.load.image(
      "girl-dress1-bag1-accessory1",
      "/assets/images/girl-dress1-bag1-accessory1.png"
    );
    this.load.image(
      "girl-dress1-bag1-accessory2",
      "/assets/images/girl-dress1-bag1-accessory2.png"
    );
    this.load.image("girl-dress1-bag2", "/assets/images/girl-dress1-bag2.png");
    this.load.image(
      "girl-dress1-bag2-accessory1",
      "/assets/images/girl-dress1-bag2-accessory1.png"
    );
    this.load.image(
      "girl-dress1-bag2-accessory2",
      "/assets/images/girl-dress1-bag2-accessory2.png"
    );

    this.load.image("girl-dress2", "/assets/images/girl-dress2.png");
    this.load.image("girl-dress2-bag1", "/assets/images/girl-dress2-bag1.png");
    this.load.image(
      "girl-dress2-bag1-accessory1",
      "/assets/images/girl-dress2-bag1-accessory1.png"
    );
    this.load.image(
      "girl-dress2-bag1-accessory1",
      "/assets/images/girl-dress2-bag1-accessory1.png"
    );
    this.load.image(
      "girl-dress2-bag1-accessory2",
      "/assets/images/girl-dress2-bag1-accessory2.png"
    );
    this.load.image("girl-dress2-bag2", "/assets/images/girl-dress2-bag2.png");
    this.load.image(
      "girl-dress2-bag2-accessory1",
      "/assets/images/girl-dress2-bag2-accessory1.png"
    );
    this.load.image(
      "girl-dress2-bag2-accessory2",
      "/assets/images/girl-dress2-bag2-accessory2.png"
    );

    this.load.image("first-text-girl", "assets/images/textLexi1.png");

    this.load.image("choose", "/assets/images/choose.png");
    this.load.image("choose2", "/assets/images/choose2.png");
    this.load.image("choose3", "/assets/images/choose3.png");
    this.load.image("choose4", "/assets/images/choose4.png");

    this.load.image("clothes1", "/assets/images/clothes1.png");
    this.load.image("clothes2", "/assets/images/clothes2.png");

    this.load.image("bag1", "/assets/images/bag1.png");
    this.load.image("bag2", "/assets/images/bag2.png");

    this.load.image("accessory1", "/assets/images/accessory1.png");
    this.load.image("accessory2", "/assets/images/accessory2.png");
    this.load.image("accessory3", "/assets/images/accessory3.png");

    this.load.image("place1", "/assets/images/place1.png");
    this.load.image("place2", "/assets/images/place2.png");

    this.load.image("hand", "/assets/images/hand.png");

    this.load.image("progress0", "/assets/images/progress0.png");
    this.load.image("progress1", "/assets/images/progress1.png");
    this.load.image("progress2", "/assets/images/progress2.png");
    this.load.image("progress3", "/assets/images/progress3.png");

    this.load.image("btn", "/assets/images/btn.png");
  }

  create() {
    this.scene.add("Scene1", Scene1, true);
  }

  update() {}
}
