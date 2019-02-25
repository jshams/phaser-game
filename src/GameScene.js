import { Scene } from 'phaser'

class GameScene extends Scene {
  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude',
        'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
  }

  create() {
    const sky = this.add.image(0, 0, 'sky')
    sky.setOrigin(0, 0)

    this.createPlatforms()
  }

  createPlatforms() {
    this.add.image(400, 300, 'sky')
    this.platforms = this.physics.add.staticGroup()
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody()
    this.platforms.create(600, 400, 'ground')
    this.platforms.create(50, 250, 'ground')
    this.platforms.create(750, 220, 'ground')
  }
}


export default GameScene
