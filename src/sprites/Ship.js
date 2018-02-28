import Phaser from 'phaser'
import Point from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.game = game

    this.scale.x = 0.5
    this.scale.y = 0.5

    this.acceleration = 

    this.cursors = game.input.keyboard.createCursorKeys()
    //console.log(game.input.keyboard)
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    // this doesn't work yet
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  update () {
    // this.angle += 1

    if (this.cursors.up.isDown) {
 		// this.y -= 1
 		// game.physics.arcade.accelerationFromRotation(sprite.rotation, 200, sprite.body.acceleration)

 		this.game.physics.arcade.accelerationFromRotation(this.angle, 200, new Point(1, 1))
    } else {
		// sprite.body.acceleration.set(0);
    }

    if (this.cursors.down.isDown) {
		this.y += 1
    }

    if (this.cursors.left.isDown) {
		this.angle -= 1
		// sprite.body.angularVelocity = -300;
    }

    if (this.cursors.right.isDown) {
		this.angle += 1
		// sprite.body.angularVelocity = 300;
    }

    if (this.spaceKey.isDown) {
		console.log("fire!")
    }

    this.screenWrap(this)

  }

  screenWrap (sprite) {

    if (sprite.x < 0)
    {
        sprite.x = game.width;
    }
    else if (sprite.x > game.width)
    {
        sprite.x = 0;
    }

    if (sprite.y < 0)
    {
        sprite.y = game.height;
    }
    else if (sprite.y > game.height)
    {
        sprite.y = 0;
    }

}
}