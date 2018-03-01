export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

export const screenWrap = (sprite) =>  {

	if (sprite.x < 0) {

		sprite.x = game.width

	} else if (sprite.x > game.width) {

		sprite.x = 0

	}

	if (sprite.y < 0) {

		sprite.y = game.height

	} else if (sprite.y > game.height) {

		sprite.y = 0
		
	}

}
