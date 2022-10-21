import Phaser from 'phaser'
import "./Helpers/WebFontLoader";

import GamePlay from './scenes/gameplay'
import Preload from './scenes/preload'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 1700,
	height: 900,
	backgroundColor: '#FFFAC5',
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Preload,GamePlay]
}

export default new Phaser.Game(config)
