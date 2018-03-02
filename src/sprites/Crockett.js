import Phaser from 'phaser'
import { screenWrap } from '../utils'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {

    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.scale.x = 0.1
    this.scale.y = 0.1

  }

  update () {
    this.x +=0.1
    this.y +=0.5
    screenWrap(this)
  }
}
