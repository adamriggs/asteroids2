import Phaser from 'phaser'
import Asteroid from './Asteroid'

export default class  {

  constructor ( game ) {
    this.game = game
    this.asteroids = []
    this.init()

  }

  init () {

    this.asteroids.push(this.createAsteroid())

    console.log(this.asteroids)

  }

  createAsteroid () {
    // push a new asteroid into the asteroids array
    var ast = new Asteroid({
                    game: this.game,
                    // x: this.world.x=0,
                    // y: this.world.y=0,
                    asset: 'game-crockett'
                  })

    ast.alive = true
    this.game.add.existing(ast)
    return ast
  }

  update () {

  }
}
