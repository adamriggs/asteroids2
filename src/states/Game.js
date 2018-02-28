/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Ship from '../sprites/Ship'
import Crockett from '../sprites/Crockett'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    // const bannerText = 'Phaser + ES6 + Webpack'
    // let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
    //   font: '40px Bangers',
    //   fill: '#77BFA3',
    //   smoothed: false
    // })

    // banner.padding.set(10, 16)
    // banner.anchor.setTo(0.5)

    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

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

    // this.game.add.existing(this.mushroom)
    this.game.add.existing(this.ship)
    this.game.add.existing(this.crockett)
  }

  render() {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.ship, 32, 32)
    // }
  }

}
