import Phaser from 'phaser'
import { screenWrap } from '../utils'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {

    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.init()

  }

  init () {

    this.scale.x = 0.5
    this.scale.y = 0.5

    this.x = Math.random() * 50

    if(Math.random() > 0.5) {
      console.log(this.game.canvas.width)
      this.x = (this.game.canvas.width * .8)
    }

    this.y = Math.random() * 200

  }

  update () {
    this.x +=0.1*(Math.random() * 1.15)
    this.y +=0.5*(Math.random() * 1.15)
    screenWrap(this)
  }
}
