class Scene2 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene2" });
  }

  bg;
  girl;
  choose;
  clothes1;
  clothes2;
  hand;
  progress;

  create() {
    this.bg = this.add.image(155, 450, "bg-room").setTint(0x000000).setAlpha(0);
    this.girl = this.add.image(-300, 465, "girl2");
    this.choose = this.add.image(300, 35, "choose").setAlpha(0);
    this.clothes1 = this.add.image(160, 700, "clothes1").setAlpha(0);
    this.clothes2 = this.add.image(440, 700, "clothes2").setAlpha(0);

    this.hand = this.add.image(190, 1100, "hand");

    this.checkOriention(
      this.scale.orientation,
      this.girl,
      this.choose,
      this.clothes1,
      this.clothes2,
      this.hand
    );
    this.scale.on("orientationchange", this.checkOriention, this);

    let animateGirl = this.tweens.add({
      targets: this.girl,
      delay: 30,
      duration: 1500,
      x: 300,
      y: 465,
      ease: "Back",
    });

    let animateChoose = this.tweens.add({
      targets: this.choose,
      delay: 1700,
      duration: 1000,
      alpha: 1,
      onStart: function () {
        this.parent.scene.bg.setAlpha(0.6);
      },
    });

    let animateClothes = this.tweens.add({
      targets: [this.clothes1, this.clothes2],
      delay: 3000,
      duration: 1000,
      alpha: 1,
      onStart: function () {
        this.parent.scene.bg.setAlpha(0);
      },
    });

    let animateTopHand = this.tweens.add({
      targets: this.hand,
      delay: 4100,
      duration: 500,
      y: this.scale.orientation === Phaser.Scale.PORTRAIT ? 730 : 590,
      x: this.scale.orientation === Phaser.Scale.PORTRAIT ? 190 : 235,
      onStart: function () {
        this.parent.scene.bg.setAlpha(0.6);
      },
    });

    let animateRigthHand = this.tweens.add({
      targets: this.hand,
      delay: 5000,
      duration: 500,
      x: this.scale.orientation === Phaser.Scale.PORTRAIT ? 490 : 400,
    });

    this.clothes1.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.clothesFn();
        localStorage.setItem("Selected-dress", "dress1");
        this.scene.add("Scene3", Scene3, true);
      },
      this
    );

    this.clothes2.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.clothesFn();
        localStorage.setItem("Selected-dress", "dress2");
        this.scene.add("Scene3", Scene3, true);
      },
      this
    );
  }

  update() {
    this.checkOriention(
      this.scale.orientation,
      this.girl,
      this.choose,
      this.clothes1,
      this.clothes2,
      this.hand
    );
    this.scale.on("orientationchange", this.checkOriention, this);
  }

  checkOriention(orientation, girl, choose, clothes1, clothes2, hand) {
    if (orientation === Phaser.Scale.PORTRAIT) {
      girl?.setScale(1);
      choose?.setScale(1).setY(35);
      clothes1?.setScale(0.5).setX(160).setY(700);
      clothes2?.setScale(0.5).setX(440).setY(700);
      hand?.setScale(1);
    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      girl?.setScale(0.45);
      choose?.setScale(0.5).setY(270);
      clothes1?.setScale(0.23).setX(230).setY(570);
      clothes2?.setScale(0.23).setX(370).setY(570);
      hand?.setScale(0.5);
    }
  }

  clothesFn() {
    this.hand.setAlpha(0);
    this.choose.setAlpha(0);
    this.bg.setAlpha(0);
    this.clothes1.setAlpha(0);
    this.clothes2.setAlpha(0);

    let animateGirl2 = this.tweens.add({
      targets: this.girl,
      duration: 500,
      alpha: 0,
    });

    if (this.scale.orientation === Phaser.Scale.PORTRAIT) {
      this.progress = this.add.image(300, 30, "progress0").setAlpha(0);
    } else {
      this.progress = this.add
        .image(300, 265, "progress0")
        .setScale(0.45)
        .setAlpha(0);
    }

    let animeteProgress = this.tweens.add({
      targets: this.progress,
      duration: 300,
      alpha: 1,
      completeDelay: 300,
      onComplete: function (animeteProgress, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
      },
    });
  }
}
