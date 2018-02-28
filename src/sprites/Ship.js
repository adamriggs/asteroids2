import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)

    this.scale.x = 0.5
    this.scale.y = 0.5

    this.cursors = game.input.keyboard.createCursorKeys()
    //console.log(game.input.keyboard)
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  update () {
    //this.angle += 1

    if (this.cursors.up.isDown) {
    	this.y -= 1
    }

    if (this.cursors.down.isDown) {
    	this.y += 1
    }

    if (this.cursors.left.isDown) {
    	this.angle -= 1
    }

    if (this.cursors.right.isDown) {
    	this.angle += 1
    }

    if (this.spaceKey.isDown) {
    	console.log("fire!")
    }


  }
}
