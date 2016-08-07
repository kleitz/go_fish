var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameView')

game.state.add('Game', GameState, true)
