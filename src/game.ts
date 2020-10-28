import Phaser from 'phaser';

import BootScene from './scenes/BootScene';
import MainMenuScene from './scenes/MainMenuScene';

class SimpleGame extends Phaser.Game {
  constructor() {
    super({
      version: '1.1',
      width: 800,
      height: 600,
      type: Phaser.AUTO,
      parent: 'content',
      scene: [BootScene, MainMenuScene]
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let game = new SimpleGame();
});
