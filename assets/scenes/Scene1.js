class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: "Scene1" });
  }

  bg;
  man;
  textMan;
  girl;
  textGirl;

  count = 0;

  create() {
    this.bg = this.add
      .image(155, 450, "bg-room")
      .setTint(0xffffff)
      .setAlpha(0.4);
    this.man = this.add.image(-100, 450, "man");
    this.textMan = this.add.image(300, 500, "first-text-man").setAlpha(0);
    this.girl = this.add.image(-300, 450, "girl1");
    this.textGirl = this.add.image(300, 500, "first-text-girl").setAlpha(0);

    this.checkOriention(
      this.scale.orientation,
      this.man,
      this.textMan,
      this.girl,
      this.textGirl
    );
    this.scale.on("orientationchange", this.checkOriention, this);

    let animateMan = this.tweens.add({
      targets: this.man,
      delay: 0,
      duration: 1500,
      x: 300,
      y: 450,
      ease: "Back",
      onComplete: function (animateMan, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
        animateMan.remove();
      },
    });

    let animateManText = this.tweens.add({
      targets: this.textMan,
      delay: 100,
      duration: 1400,
      alpha: 1,
      ease: "Cubic",
      onComplete: function (animateManText, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
        animateManText.remove();
      },
    });

    let animateGirl = this.tweens.add({
      targets: this.girl,
      delay: 1500,
      duration: 1500,
      x: 300,
      y: 450,
      ease: "Back",
      onComplete: function (animateGirl, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
        animateGirl.remove();
      },
    });

    let animateGirlText = this.tweens.add({
      targets: this.textGirl,
      delay: 1550,
      duration: 1450,
      alpha: 1,
      ease: "Cubic",
      onComplete: function (animateGirlText, targets) {
        targets[0].x = -500;
        targets[0].y = -500;
        animateGirlText.remove();
      },
    });

    let animateLightBg = this.tweens.add({
      targets: this.bg,
      delay: 3000,
      alpha: 1,
    });

    // Example of animation //
    // this.anims.create({
    //   key: "test",
    //   frames: [
    //     { key: "girl-dress1" },
    //     { key: "girl-dress1-bag1", duration: 20 },
    //   ],
    //   frameRate: 8,
    //   repeat: 6,
    // });

    // this.add.sprite(300, 450, "girl-dress1").play("test");
  }

  update() {
    this.count += 1;

    this.checkOriention(
      this.scale.orientation,
      this.man,
      this.textMan,
      this.girl,
      this.textGirl
    );

    this.scale.on("orientationchange", this.checkOriention, this);

    if (this.count === 180) {
      this.scene.add("Scene2", Scene2, true);
    }
  }

  checkOriention(orientation, man, textMan, girl, textGirl) {
    if (orientation === Phaser.Scale.PORTRAIT) {
      this.bg.setScale(1);
      this.bg.x = 155;
      this.bg.y = 450;

      man?.setScale(1);
      textMan?.setScale(1);
      girl?.setScale(1);
      textGirl?.setScale(1);
    } else if (orientation === Phaser.Scale.LANDSCAPE) {
      this.bg.setScale(0.7);
      this.bg.x = 300;
      this.bg.y = 450;

      man?.setScale(0.45);
      textMan?.setScale(0.5);
      girl?.setScale(0.45);
      textGirl?.setScale(0.5);
    }
  }
}
