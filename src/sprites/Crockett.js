import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.scale.x = 0.1
    this.scale.y = 0.1
  }

  update () {
    //this.angle += 1
  }
}
