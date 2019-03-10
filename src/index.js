import { Game} from 'phaser';

import sayHello from './utils';
import config from './config';

const music = new Audio(["assets/gamemusic.mp3"]);
let working = 1
if (working > 0) {
  music.play()
  console.log("PLAYING MUSIC")
}


var game = new Game(config);
