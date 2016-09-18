//  Namespace for the Game Object
function GameState (game) {
}

//  Phaser preload function to preload all game assets.
GameState.prototype.preload = function () {
  this.game.load.image('sky', '../../img/assets/sky.png')
  this.game.load.image('ground', '../../img/assets/platform.png')
  this.game.load.image('star', '../../img/assets/star.png')
}

//  Phaser Create function to instantiate all game assets.
GameState.prototype.create = function () {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  // add a simple sky
  game.add.sprite(0, 0, 'sky')
  levels.platforms = game.add.group()
  levels.platforms.enableBody = true

  var ground = levels.platforms.create(0, game.world.height - 128, 'ground')
  //scale the ground to fit the screen
  ground.scale.setTo(2,4)
  ground.body.immovable = true

  var ledge = levels.platforms.create(200, 400, 'ground')
  ledge.body.immovable = true
  ledge = levels.platforms.create(-150, 250, 'ground')
  ledge.body.immovable = true
  this.game.add.sprite(0, 0, 'star')

}

// Phaser Update function to update game screen and progress the game.
GameState.prototype.update = function () {

}

//  instantiate a new Phaser Game object.
var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, (window.innerHeight * window.devicePixelRatio) - 45 * window.devicePixelRatio, Phaser.AUTO, 'gameView')

function GameLevel () {
}
GameLevel.prototype.level_name = function (name) {
  this.name = name;
}
GameLevel.prototype.get_level_name = function () {
  return this.name;
}
var levels = new GameLevel()

game.state.add('Game', GameState, true)
