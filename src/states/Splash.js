import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.load.image('game-background', 'assets/images/game/space.jpg')
    this.load.image('game-ship', 'assets/images/game/ship.png')
    this.load.image('game-bullets', 'assets/images/game/bullets.png')
    this.load.image('game-crockett', 'assets/images/game/crockett.png')
    this.load.image('game-tubbs', 'assets/images/game/tubbs.png')
    this.load.image('game-castillo', 'assets/images/game/castillo.png')

    this.load.spritesheet('game-spritesheet-asteroids', 'assets/images/game/spritesheet-asteroids_200h.png', 143, 200)
    this.load.image('mushroom', 'assets/images/mushroom2.png')
  }

  create () {
    this.state.start('Game')
  }
}
