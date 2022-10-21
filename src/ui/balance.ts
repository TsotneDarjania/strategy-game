export default class Balance extends Phaser.GameObjects.Container{

    balance : number

    constructor(scene : Phaser.Scene, x : number, y : number, balance : number){
        super(scene,x,y);
        this.scene.add.existing(this);
        this.balance = balance;

        this.addMoneyIcon();
        this.addMoneyText();

    }

    addMoneyIcon(){
        this.scene.add.image(10,10,"moneyIcon")
        .setOrigin(0)
        .setScrollFactor(0,0)
        .setScale(0.2)
        .setAlpha(0.8)
        .setTint(0x52100E)
    }

    addMoneyText(){
        this.scene.add.text(80,35,this.balance.toString(), {
            fontFamily: 'mainFont',
            fontSize : "30px", 
            color: "#66370A"
        })
        .setDepth(100)
        .setOrigin(0)
        .setScrollFactor(0,0)
    }
}