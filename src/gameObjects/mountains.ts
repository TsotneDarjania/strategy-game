export default class Mountain extends Phaser.GameObjects.Image{
    constructor(scene : Phaser.Scene, x : number, y : number, key : string){
        super(scene,x,y,key)
        this.setOrigin(0);
        this.setTint(0xFFBC05)
        this.setAlpha(0.5)
        scene.add.existing(this);
    }
}