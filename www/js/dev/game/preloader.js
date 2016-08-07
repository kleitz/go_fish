GameState.prototype.preload = function () {
  this.game.load.image('sky', '../../img/assets/sky.png')
  this.game.load.image('ground', '../../img/assets/platform.png')
  this.game.load.image('star', '../../img/assets/star.png')
}

GameState.prototype.create = function () {
  this.game.add.sprite(0, 0, 'star')
}
