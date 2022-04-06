class Scene3 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene3" });
  }

  count = 0;
  girl;
  bag1;
  bag2;
  accessory1;
  accessory2;
  place1;
  place2;
  choose;
  progress;
  hand;
  man;
  textMan;
  btn;
  finalOutfit;
  bg_place1;
  bg_place2;

  create() {
    const dress = localStorage.getItem("Selected-dress");

    this.bg_place1 = this.add.image(155, 450, "bg-place1").setAlpha(0);
    this.bg_place2 = this.add.image(155, 450, "bg-place2").setAlpha(0);

    this.girl =
      dress === "dress1"
        ? this.add.image(300, 465, "girl-dress1").setAlpha(0)
        : this.add.image(300, 465, "girl-dress2").setAlpha(0);

    this.bag1 = this.add.image(160, 700, "bag1").setScale(0.5).setAlpha(0);
    this.bag2 = this.add.image(440, 700, "bag2").setScale(0.5).setAlpha(0);

    this.accessory1 = this.add
      .image(160, 700, "accessory1")
      .setAlpha(0)
      .setDepth(1);
    this.accessory2 = this.add
      .image(440, 700, "accessory2")
      .setAlpha(0)
      .setDepth(1);

    this.place1 = this.add.image(160, 700, "place1").setAlpha(0).setDepth(1);
    this.place2 = this.add.image(440, 700, "place2").setAlpha(0).setDepth(1);

    this.progress = this.add.image(300, 30, "progress1").setAlpha(0);

    this.choose = this.add.image(300, 35, "choose2").setAlpha(0);

    this.hand = this.add.image(190, 1100, "hand").setDepth(5);

    this.checkOriention(
      this.scale.orientation,
      this.girl,
      this.choose,
      this.progress,
      this.bag1,
      this.bag2,
      this.accessory1,
      this.accessory2,
      this.place1,
      this.place2,
      this.hand,
      this.finalOutfit,
      this.man,
      this.textMan,
      this.btn
    );
    this.scale.on("orientationchange", this.checkOriention, this);

    let animeteGirl = this.tweens.add({
      targets: this.girl,
      duration: 700,
      alpha: 1,
      ease: "Linear",
    });

    let animeteProgress = this.tweens.add({
      targets: this.progress,
      delay: 200,
      duration: 700,
      alpha: 1,
      onComplete: function (animeteProgress, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
      },
    });

    let animeteChoose2 = this.tweens.add({
      targets: this.choose,
      delay: 900,
      duration: 700,
      alpha: 1,
    });

    let animateBags = this.tweens.add({
      targets: [this.bag1, this.bag2],
      delay: 900,
      duration: 700,
      alpha: 1,
    });

    this.bag1.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.bagsFn("girl-dress1-bag1", "girl-dress2-bag1");
      },
      this
    );

    this.bag2.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.bagsFn("girl-dress1-bag2", "girl-dress2-bag2");
      },
      this
    );

    this.accessory1.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.accessoriesFn(
          "girl-dress1-bag1-accessory1",
          "girl-dress1-bag2-accessory1",
          "girl-dress2-bag1-accessory1",
          "girl-dress2-bag2-accessory1"
        );
      },
      this
    );

    this.accessory2.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.accessoriesFn(
          "girl-dress1-bag1-accessory2",
          "girl-dress1-bag2-accessory2",
          "girl-dress2-bag1-accessory2",
          "girl-dress2-bag2-accessory2"
        );
      },
      this
    );

    this.place1.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.placesFs(this.bg_place1);
      },
      this
    );

    this.place2.setInteractive().on(
      "pointerdown",
      function (pointer, localX, localY, event) {
        this.placesFs(this.bg_place2);
      },
      this
    );
  }

  update() {
    this.checkOriention(
      this.scale.orientation,
      this.girl,
      this.choose,
      this.progress,
      this.bag1,
      this.bag2,
      this.accessory1,
      this.accessory2,
      this.place1,
      this.place2,
      this.hand,
      this.finalOutfit,
      this.man,
      this.textMan,
      this.btn
    );
    this.scale.on("orientationchange", this.checkOriention, this);

    this.count += 1;

    if (this.count === 120) {
      console.log("2sec");
      let animateTopHand = this.tweens.add({
        targets: this.hand,
        duration: 500,
        y: this.scale.orientation === Phaser.Scale.PORTRAIT ? 730 : 590,
        x: this.scale.orientation === Phaser.Scale.PORTRAIT ? 190 : 235,
      });

      let animateRigthHand = this.tweens.add({
        targets: this.hand,
        delay: 700,
        duration: 700,
        x: this.scale.orientation === Phaser.Scale.PORTRAIT ? 490 : 400,
        completeDelay: 300,
        onComplete: function (animateRigthHand, targets) {
          targets[0].x = 190;
          targets[0].y = 1100;
        },
      });
    }
  }

  checkOriention(
    orientation,
    girl,
    choose,
    progress,
    bag1,
    bag2,
    accessory1,
    accessory2,
    place1,
    place2,
    hand,
    finalOutfit,
    man,
    textMan,
    btn
  ) {
    if (orientation === Phaser.Scale.PORTRAIT) {
      girl?.setScale(1);
      choose?.setScale(1).setY(35);
      progress?.setScale(1).setY(30);
      bag1?.setScale(0.5).setX(160).setY(700);
      bag2?.setScale(0.5).setX(440).setY(700);
      accessory1?.setScale(1).setX(160).setY(700);
      accessory2?.setScale(1).setX(440).setY(700);
      place1?.setScale(1).setX(160).setY(700);
      place2?.setScale(1).setX(440).setY(700);
      hand?.setScale(1);
      finalOutfit?.setScale(1).setY(495);
      man?.setScale(1);
      textMan?.setScale(1);
      btn?.setY(800).setScale(1);
    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      girl?.setScale(0.45);
      choose?.setScale(0.5).setY(270);
      progress?.setScale(0.45).setY(265);
      bag1?.setScale(0.23).setX(230).setY(570);
      bag2?.setScale(0.23).setX(370).setY(570);
      accessory1?.setScale(0.45).setX(230).setY(570);
      accessory2?.setScale(0.45).setX(370).setY(570);
      place1?.setScale(0.45).setX(230).setY(570);
      place2?.setScale(0.45).setX(370).setY(570);
      hand?.setScale(0.5);
      finalOutfit?.setScale(0.45).setY(465);
      man?.setScale(0.45);
      textMan?.setScale(0.5);
      btn?.setY(560).setScale(0.6);
    }
  }

  bagsFn(value1, value2) {
    this.count = 0;
    let animeteGirlBag = null;
    switch (this.girl.texture.key) {
      case "girl-dress1":
        // this.girl.setAlpha(0)
        this.girl = this.add.image(300, 465, value1).setAlpha(0);
        animeteGirlBag = this.tweens.add({
          targets: this.girl,
          duration: 700,
          alpha: 1,
          ease: "Linear",
        });
        break;
      case "girl-dress2":
        this.girl = this.add.image(300, 465, value2).setAlpha(0);
        animeteGirlBag = this.tweens.add({
          targets: this.girl,
          duration: 700,
          alpha: 1,
          ease: "Linear",
        });
        break;

      default:
        break;
    }

    this.bag1.setAlpha(0);
    this.bag2.setAlpha(0);

    let animateAccessory = this.tweens.add({
      targets: [this.accessory1, this.accessory2],
      delay: 300,
      duration: 500,
      alpha: 1,
    });

    this.progress.setAlpha(0);
    this.progress = this.add.image(300, 30, "progress2").setAlpha(0);
    this.choose.setAlpha(0);
    this.choose = this.add.image(300, 35, "choose3").setAlpha(0);

    let animeteProgress2 = this.tweens.add({
      targets: this.progress,
      delay: 200,
      duration: 700,
      alpha: 1,
      onComplete: function (animeteProgress, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
      },
    });

    let animeteChoose3 = this.tweens.add({
      targets: this.choose,
      delay: 900,
      duration: 700,
      alpha: 1,
    });
  }

  accessoriesFn(value1, value2, value3, value4) {
    this.count = 0;
    let animeteGirlBagAccessory = null;
    switch (this.girl.texture.key) {
      case "girl-dress1-bag1":
        // this.girl.setAlpha(0);
        this.girl = this.add.image(300, 465, value1).setAlpha(0);
        animeteGirlBagAccessory = this.tweens.add({
          targets: this.girl,
          duration: 700,
          alpha: 1,
          ease: "Linear",
        });
        break;
      case "girl-dress1-bag2":
        this.girl = this.add.image(300, 465, value2).setAlpha(0);
        animeteGirlBagAccessory = this.tweens.add({
          targets: this.girl,
          duration: 700,
          alpha: 1,
          ease: "Linear",
        });
        break;
      case "girl-dress2-bag1":
        this.girl = this.add.image(300, 465, value3).setAlpha(0);
        animeteGirlBagAccessory = this.tweens.add({
          targets: this.girl,
          duration: 700,
          alpha: 1,
          ease: "Linear",
        });
        break;
      case "girl-dress2-bag2":
        this.girl = this.add.image(300, 465, value4).setAlpha(0);
        animeteGirlBagAccessory = this.tweens.add({
          targets: this.girl,
          duration: 700,
          alpha: 1,
          ease: "Linear",
        });
        break;

      default:
        break;
    }

    this.accessory1.setAlpha(0);
    this.accessory2.setAlpha(0);

    let animatePlace = this.tweens.add({
      targets: [this.place1, this.place2],
      delay: 300,
      duration: 500,
      alpha: 1,
    });

    this.progress.setAlpha(0);
    this.progress = this.add.image(300, 30, "progress3").setAlpha(0);
    this.choose.setAlpha(0);
    this.choose = this.add.image(300, 35, "choose4").setAlpha(0);

    let animeteProgress3 = this.tweens.add({
      targets: this.progress,
      delay: 200,
      duration: 700,
      alpha: 1,
      onComplete: function (animeteProgress, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
      },
    });

    let animeteChoose4 = this.tweens.add({
      targets: this.choose,
      delay: 900,
      duration: 700,
      alpha: 1,
    });
  }

  placesFs(bg) {
    this.count = 200;
    this.man = this.add.image(300, 465, "man2").setAlpha(0).setDepth(1);
    this.textMan = this.add
      .image(300, 500, "final-text-man")
      .setDepth(3)
      .setAlpha(0);
    this.btn = this.add.image(300, 800, "btn").setDepth(4).setAlpha(0);

    this.place1.setAlpha(0);
    this.place2.setAlpha(0);
    this.choose.setAlpha(0);

    this.finalOutfit = this.add
      .image(300, 495, this.girl.texture.key)
      .setDepth(2)
      .setAlpha(0);

    bg.setAlpha(1).setDepth(1);

    let animateMan = this.tweens.add({
      targets: this.man,
      duration: 500,
      alpha: 1,
      x: 350,
    });

    let animateGirlFinal = this.tweens.add({
      targets: this.finalOutfit,
      delay: 800,
      duration: 500,
      alpha: 1,
      x: 190,
    });

    let animateTextMan = this.tweens.add({
      targets: this.textMan,
      delay: 1300,
      duration: 1500,
      alpha: 1,
      onComplete: function (animateTextMan, targets) {
        targets[0].x = -500;
      },
    });

    let animateBtn = this.tweens.add({
      targets: this.btn,
      delay: 2800,
      duration: 3000,
      alpha: 1,
      ease: "Bounce",
    });

    this.btn.setInteractive();
    this.btn.on("pointerup", function () {
      window.open(
        "https://apps.apple.com/us/app/id1491717191?platform=ipad",
        "_blank"
      );
    });
  }
}
