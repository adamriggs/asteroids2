import Phaser from 'phaser'
import Asteroid from './Asteroid'

export default class  {

  constructor ( game, world ) {
    this.game = game
    this.world = world
    this.asteroids = []
    this.asteroidsStart = 8
    this.init()

  }

  init () {

    for (var i = 0; i < this.asteroidsStart; i++) {
      this.asteroids.push(this.createAsteroid())
    }
    console.log(this.asteroids)

  }

  createAsteroid () {
    // push a new asteroid into the asteroids array
    var ast = new Asteroid({
                    game: this.game,
                    // x: this.world.x=50,
                    // y: this.world.y=50,
                    asset: 'game-spritesheet-asteroids'
                  })

    ast.alive = true
    ast.key="game-tubbs"
    this.game.add.existing(ast)
    return ast
  }

  update () {

  }
}
