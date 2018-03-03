/* globals __DEV__ */
import Phaser from 'phaser'
import Ship from '../sprites/Ship'
import Asteroids from '../sprites/Asteroids'
import Asteroid from '../sprites/Asteroid'

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

    this.asteroid = new Asteroid({
      game: this.game,
      x: this.world.x=0,
      y: this.world.y=0,
      asset: 'game-crockett'
    })

    this.game.add.existing(this.ship)
    this.game.add.existing(this.asteroid)

    this.asteroids = new Asteroids(this.game, this.world)
  }

  render() {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.ship, 32, 32)
    // }
  }

}
