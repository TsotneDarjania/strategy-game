export default class BuildIcon extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,key){
        super(scene,x,y,key);
        this.scene.add.existing(this);
        
        this.setOrigin(0)
        this.setScale(0.4)
        this.setScrollFactor(0,0);
        this.setDepth(20)
        this.setTint(0xF59D18)
        this.setAlpha(0.8)

        this.setInteractive();
        this.addEvents();
    }

    addEvents(){
        this.on(Phaser.Input.Events.POINTER_OVER, () => {
            this.setAlpha(1)
        })
        this.on(Phaser.Input.Events.POINTER_OUT, () => {
            this.setAlpha(0.8)
        })

        this.on(Phaser.Input.Events.POINTER_DOWN, () => {
            this.emit("click");
        })
    }


}