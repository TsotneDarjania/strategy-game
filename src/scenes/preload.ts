import Phaser from 'phaser'

export default class Preload extends Phaser.Scene
{
	constructor()
	{
		super('Preload')
	}

	preload()
    {
        this.load.webFont("mainFont","https://fonts.gstatic.com/s/pressstart2p/v14/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2")
        //Load Ui Elements
        this.load.image("moneyIcon","img/ui/money_icon.png")
        this.load.image("buildIcon","img/ui/build_icon.png")
        this.load.image("popupBackgroundBorder","img/ui/background_border.png")
        this.load.image("villageIcon","img/ui/village_icon.png")
        this.load.image("smallCastleIcon","img/ui/smallCastleIcon.png")
        this.load.image("arrowIcon","img/ui/arrow.png")
        this.load.image("buildBtn","img/ui/buildBtn.png")

        //Load GameObjects
        this.load.image('mountain', 'img/bck_1.png')
        this.load.image('ground', 'img/ground.png')

        //Load Characters
        this.load.spritesheet("king", "img/king.png", {frameWidth: 302,
            frameHeight: 302} )
        this.load.spritesheet("tree", "img/tree.png", {frameWidth: 300,
            frameHeight: 400} )

        //Load Sounds
        this.load.audio('walk', 'soundEffects/walk.mp3')
        this.load.audio('click', 'soundEffects/click.mp3')
        this.load.audio('arrowClick', 'soundEffects/arrowClick.mp3')

    }

    create()
    {
        //Add animations
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('king', { start: 0, end: 19 }),
            frameRate: 50,
            repeat: -1,
            yoyo: true
        })
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('king', { start: 20, end: 39 }),
            frameRate: 80,
            repeat: -1,
            yoyo: true
        })

        this.scene.start("GamePlay");


        
    }
}
