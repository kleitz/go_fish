var GameState = {
  // preload all game assets
  preload: function () {
    this.load.image('background', '../../assets/images/background.png')
    this.load.image('chicken', '../../assets/images/chicken.png')
    this.load.image('horse', '../../assets/images/horse.png')
    this.load.image('pig', '../../assets/images/pig.png')
    this.load.image('sheep', '../../assets/images/sheep3.png')
    this.load.image('arrow', '../../assets/images/arrow.png')
  },
  // create game objects after loading all assets
  create: function () {
    // set responsive scaling
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    // center view to screen
    this.scale.pageAlignHorizontally = true
    this.scale.pageAlignVertically = true
    this.background = this.game.add.sprite(0,0, 'background')
    //  add chicken at the center of the screen
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken')
    this.chicken.anchor.setTo(0.5)
    this.chicken.scale.setTo(-1, 1)

    // add arrows
    // right arrow
    this.rightArrow = this.game.add.sprite((this.game.world.width - 60), this.game.world.centerY, 'arrow')
    this.rightArrow.anchor.setTo(0.5)
    this.rightArrow.customParams = {direction: 1}
    this.rightArrow.inputEnabled = true
    this.rightArrow.input.pixelPerfectClick = true
    this.rightArrow.events.onInputDown.add(this.switchAnimal, this)
    // left arrow
    this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow')
    this.leftArrow.anchor.setTo(0.5)
    this.leftArrow.scale.setTo(-1, 1)
    this.leftArrow.customParams = {direction: -1}

    this.leftArrow.inputEnabled = true
    this.leftArrow.input.pixelPerfectClick = true
    this.leftArrow.events.onInputDown.add(this.switchAnimal, this)

  },
  // update game state loop
  update: function () {

  },
  switchAnimal: function (sprite,  event) {
    console.log('Move animal')
  },
  animateAnimal: function (sprite,  event) {
    console.log('Animate animal')
  }
}



//  instantiate a new Phaser Game object.
var game = new Phaser.Game(640, 360, Phaser.AUTO, 'gameView')
game.state.add('GameState', GameState)
game.state.start('GameState')
