export default class Platforms extends Phaser.Physics.Arcade.StaticGroup{

    constructor(scene:Phaser.Scene){
        super(scene.physics.world,scene)
        this.setDepth(500)
    }

    createGround(x,y,key){
        this.create(x,y,key)
        .setDepth(10)
    }

}