/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Ship from '../sprites/Ship'
import Crockett from '../sprites/Crockett'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {

    this.ship = new Ship({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'game-ship'
    })

    this.crockett = new Crockett({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'game-crockett'
    })

    this.game.add.existing(this.ship)
    this.game.add.existing(this.crockett)
  }

  render() {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.ship, 32, 32)
    // }
  }

}
