import Mountain from "~/gameObjects/mountains"
import Ground from "~/gameObjects/ground";
import King from "~/gameObjects/king";
import Tree from "~/gameObjects/tree";
import Balance from "~/ui/balance";
import BuildIcon from "~/ui/buildIcon";
import BuildMenu from "~/ui/buildMenu";
import Platforms from "~/gameObjects/ground";

export default class GamePlay extends Phaser.Scene {

    public platforms! : Platforms;
    private king! : King;

    private balance! : Balance;
    private buildIcon! : BuildIcon;
    private buildMenu! : BuildMenu;

    private width! : number;
    private height! : number;

    private clickSound! : any;

    constructor() {
        super("GamePlay")
    }


    create(){
        this.clickSound = this.sound.add("click", { loop: false, volume: 1, rate: 1 });

        this.cameras.main.setBounds(0,0,Infinity,900);

        new Mountain(this,-100,300,"mountain").setScrollFactor(0.14,0);

        this.platforms = new Platforms(this);

        this.platforms.createGround(240,840,"ground");
        this.platforms.createGround(731,840,"ground");
        this.platforms.createGround(1222,840,"ground");
        this.platforms.createGround(1713,840,"ground");

        new Tree(this,200,700,"tree",7).setScale(0.7).setTint(0x040A1A);
        new Tree(this,700,700,"tree",10).setScale(0.5).setTint(0x0E255E);
        new Tree(this,900,700,"tree",5).setScale(0.6).setTint(0x08381F);
       
        this.king = new King(this,500,600,"king");

        this.cameras.main.startFollow(this.king,true,0.08,0.08);
        this.cameras.main.setZoom(1.0);

        this.physics.add.collider(this.king, this.platforms);

        this.balance = new Balance(this,0,0,100);
        this.buildIcon =  new BuildIcon(this,1510,700,"buildIcon")
        .on("click", () => {
            this.buildMenu.visible ? this.buildMenu.close() : this.buildMenu.open()
            this.clickSound.play();
        })

        this.width = this.sys.game.canvas.width;
        this.height = this.sys.game.canvas.height;

        this.buildMenu = new BuildMenu(this,this.width/2,this.height/2)
        .on("buildBtnClick", (itemName) => {
            this.king.build(itemName);
        });

        
    }
}