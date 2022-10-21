export default class BuildMenu extends Phaser.GameObjects.Container {
  graphics: any;
  backgroundFill: any;

  arroClickSound: any;
  buildBtn!: Phaser.GameObjects.Image;
  free!: Phaser.GameObjects.Text;
  iconTitle!: Phaser.GameObjects.Text;
  iconImage!: Phaser.GameObjects.Image;

  itemsIndex: number = 0;

  items: Object = {
    0: {
      key: "villageIcon",
      title: "VILLAGE",
      free: 20,
    },
    1: {
      key: "smallCastleIcon",
      title: "Small Castle",
      free: 50,
    },
  };

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y);
    this.scene.add.existing(this);
    this.setDepth(50);

    this.graphics = this.scene.add.graphics({
      lineStyle: { width: 2, color: 0xaa0000 },
      fillStyle: { color: 0x0d0801 },
    });

    this.addSoundEffects();
    this.addBackground();
    this.addTitle();

    let { key, title, free } = this.items[this.itemsIndex];
    this.addItems(key, title, free);

    this.setScale(0);
    this.setAlpha(0);
    this.setVisible(false);
  }

  addSoundEffects() {
    this.arroClickSound = this.scene.sound.add("arrowClick", {
      loop: false,
      volume: 1,
      rate: 1,
    });
  }

  public open() {
    this.setVisible(true);

    this.scene.add.tween({
      targets: this,
      duration: 300,
      scale: 1,
      alpha: 1,
    });
  }

  public close() {
    this.scene.add.tween({
      targets: this,
      duration: 300,
      scale: 0,
      alpha: 0,
      onComplete: () => {
        this.setVisible(false);
      },
    });
  }

  addBackground() {
    let background = this.scene.add
      .image(0, 0, "popupBackgroundBorder")
      .setOrigin(0.5)
      .setDepth(50)
      .setScrollFactor(0, 0)
      .setTint(0x5d44eb);

    this.backgroundFill = this.graphics
      .fillRect(-220, -240, 430, 500)
      .setScrollFactor(0, 0)
      .setInteractive();

    this.add(this.backgroundFill);
    this.add(background);
  }

  addTitle() {
    let title = "Buildings";

    let titleText = this.scene.add
      .text(9, -250, title, {
        fontFamily: '"Press Start 2P", cursive ',
        fontSize: "30px",
        color: "white",
      })
      .setDepth(100)
      .setOrigin(0.5)
      .setScrollFactor(0);

    this.add(titleText);
  }

  addItems(icon_1_key: string, icon_1_title: string, freeNumber: number) {
    this.buildBtn = this.scene.add
      .image(0, 215, "buildBtn")
      .setDepth(100)
      .setScale(0.6)
      .setTint(0xb4ff9b)
      .setScrollFactor(0)
      .setInteractive({
        cursor: "pointer",
      })
      .on(Phaser.Input.Events.POINTER_OVER, () => {
        this.buildBtn.setTint(0xffffff);
      })
      .on(Phaser.Input.Events.POINTER_OUT, () => {
        this.buildBtn.setTint(0xb4ff9b);
      })
      .on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.emit("buildBtnClick", this.items[this.itemsIndex]);
      });
    this.add(this.buildBtn);

    this.free = this.scene.add
      .text(0, 150, freeNumber.toString(), {
        fontFamily: '"Press Start 2P", cursive ',
        fontSize: "30px",
        color: "#FF7F59",
      })
      .setDepth(100)
      .setOrigin(0.5)
      .setScrollFactor(0);
    this.scene.tweens.add({
      targets: this.free,
      duration: 300,
      scale: 1.1,
      yoyo: true,
      repeat: Infinity,
    });
    this.add(this.free);

    this.iconTitle = this.scene.add
      .text(0, -140, icon_1_title, {
        fontFamily: '"Press Start 2P", cursive ',
        fontSize: "24px",
        color: "yellow",
      })
      .setDepth(100)
      .setOrigin(0.5)
      .setScrollFactor(0);
    this.add(this.iconTitle);

    this.iconImage = this.scene.add
      .image(0, 0, icon_1_key)
      .setDepth(100)
      .setScrollFactor(0);
    this.add(this.iconImage);

    this.addIconArrows();
  }

  changeItems() {
    this.removeOldItems();

    let { key, title, free } = this.items[this.itemsIndex];
    this.addItems(key, title, free);
  }

  removeOldItems() {
    this.iconImage.destroy();
    this.iconTitle.destroy();
    this.free.destroy();
  }

  addIconArrows() {
    let rightArrow = this.scene.add
      .image(130, 215, "arrowIcon")
      .setDepth(100)
      .setScale(0.4)
      .setScrollFactor(0)
      .setInteractive({
        cursor: "pointer",
      })
      .on(Phaser.Input.Events.POINTER_DOWN, () => {
        //setMonthIndicator((monthIndicator + symbol + 12) % 12 );

        this.itemsIndex = (this.itemsIndex + 1 + 2) % 2;

        this.arroClickSound.play();
        this.changeItems();
      });
    this.add(rightArrow);

    let leftArrow = this.scene.add
      .image(-130, 215, "arrowIcon")
      .setDepth(100)
      .setScale(0.4)
      .setFlipX(true)
      .setScrollFactor(0)
      .setInteractive({
        cursor: "pointer",
      })
      .on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.arroClickSound.play();

        this.itemsIndex = (this.itemsIndex + -1 + 2) % 2;

        this.arroClickSound.play();
        this.changeItems();
      });
    this.add(leftArrow);
  }
}
