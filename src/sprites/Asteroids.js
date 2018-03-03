import Phaser from 'phaser'
import Asteroid from './Asteroid'

export default class  {

  constructor ( game, world ) {
    this.game = game
    this.world = world
    this.asteroids = []
    this.init()

  }

  init () {

    this.asteroids.push(this.createAsteroid())

  }

  createAsteroid () {
    // push a new asteroid into the asteroids array
    var ast = new Asteroid({
                    game: this.game,
                    x: this.world.x=50,
                    y: this.world.y=50,
                    asset: 'game-crockett'
                  })

    ast.alive = true
    this.game.add.existing(ast)
    return ast
  }

  update () {

  }
}
