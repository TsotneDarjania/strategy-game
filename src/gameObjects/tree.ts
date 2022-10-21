export default class Tree extends Phaser.GameObjects.Sprite{

    animationSpeed : number;

    constructor(scene : Phaser.Scene, x : number, y : number, key : string, animationSpeed : number){
        super(scene,x,y,key)
        this.scene.add.existing(this)
        this.animationSpeed = animationSpeed;
        this.setDepth(5);

        this.addAnimations();
        this.anims.play("idle")
    }

    addAnimations(){
        this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('tree', { start: 0, end: 9 }),
            frameRate: this.animationSpeed,
            repeat: -1,
            yoyo:true
        })
    }
}