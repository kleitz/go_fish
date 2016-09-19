//  Namespace for the Game Object
function GameState (game) {
}

//  Phaser preload function to preload all game assets.
GameState.prototype.preload = function () {
  // load backgound image
  this.game.load.image('background', '../../assets/images/background.png')
}

//  Phaser Create function to instantiate all game assets.
GameState.prototype.create = function () {
  game.physics.startSystem(Phaser.Physics.ARCADE)

  // add a background
  game.add.sprite(0,0, 'background')

}

// Phaser Update function to update game screen and progress the game.
GameState.prototype.update = function () {

}

//  instantiate a new Phaser Game object.
var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameView')

function GameLevel () {
}
GameLevel.prototype.level_name = function (name) {
  this.name = name;
}
GameLevel.prototype.get_level_name = function () {
  return this.name;
}
var level_1 = new GameLevel()

game.state.add('Game', GameState, true)
