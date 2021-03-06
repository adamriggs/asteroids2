import Phaser from 'phaser'
import Point from 'phaser'
import Bullet from './Bullet'

import { screenWrap } from '../utils'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {

    super(game, x, y, asset)

    this.anchor.setTo(0.5)
    this.game = game

    this.scale.x = 0.5
    this.scale.y = 0.5

    this.cursors = game.input.keyboard.createCursorKeys()
    this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    this.game.physics.enable(this, Phaser.Physics.ARCADE)

    this.body.drag.set(100)
    this.body.maxVelocity.set(200)
  }

  update () {
 
    this.body.angularAcceleration = 0

    if (this.cursors.up.isDown) {

 		this.game.physics.arcade.accelerationFromRotation(this.rotation, 200, this.body.acceleration)
    } else {
		this.body.acceleration.set(0)
    }

    if (this.cursors.down.isDown) {
		
    }

    if (this.cursors.left.isDown) {

		this.body.angularVelocity = -300

    }else if (this.cursors.right.isDown) {

		this.body.angularVelocity = 300

    } else {

        this.body.angularVelocity = 0

    }

    if (this.spaceKey.isDown) {
		console.log("fire!")
    }

    screenWrap(this)

  }

  fireBullet () {

    if (game.time.now > bulletTime) {
        bullet = bullets.getFirstExists(false);

        if (bullet) {
            bullet.reset(ship.body.x + 28, ship.body.y + 32);
            bullet.lifespan = 2000;
            bullet.rotation = ship.rotation;
            game.physics.arcade.velocityFromRotation(ship.rotation, 400, bullet.body.velocity);
            bulletTime = game.time.now + 50;
        }
    }

}
}
