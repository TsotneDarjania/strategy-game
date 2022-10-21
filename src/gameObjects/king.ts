import GameZoneInfo from '../Helpers/gameZonesInfo.json';

export default class King extends Phaser.Physics.Arcade.Sprite{

    private cursor : any;
    private velocity : number = 200;
    private walkSound! : Phaser.Sound.BaseSound;

    private gameZonesInfo! : object;



    


    constructor(scene : Phaser.Scene, x : number, y : number, key : string){
        super(scene,x,y,key,"King");
        scene.physics.add.existing(this);
        this.scene.add.existing(this)

        this.setScale(0.5)
        this.setDepth(50)
        this.body.setSize(80,this.height-100,true)

        this.addController();
        this.addSounds();

        this.anims.play("idle")
    }

    addSounds(){
        this.walkSound = this.scene.sound.add("walk", { loop: true, volume:0.5,rate:2.7 });
    }

    addController(){
        this.cursor = this.scene.input.keyboard.createCursorKeys();

        this.cursor.left.on(Phaser.Input.Keyboard.Events.DOWN,this.toLeft,this)
        this.cursor.right.on(Phaser.Input.Keyboard.Events.DOWN,this.toRight,this)

        this.cursor.left.on(Phaser.Input.Keyboard.Events.UP,this.up,this)
        this.cursor.right.on(Phaser.Input.Keyboard.Events.UP,this.up,this)
    }

    up(){
        this.anims.play("idle");
        this.setVelocity(0);
        this.walkSound.stop();
    }

    toLeft() {
        this.setFlip(true,false);
        this.setVelocityX(-this.velocity)
        this.anims.play("walk")
        this.walkSound.play();
        this.emit("move");
    }

    toRight() {
        this.setFlip(false,false);
        this.setVelocityX(this.velocity)
        this.anims.play("walk")
        this.walkSound.play();
        this.emit("move");
    }
}