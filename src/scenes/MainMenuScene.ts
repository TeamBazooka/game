import Phaser from 'phaser';

import paths from '../assets/paths';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: "MainMenuScene"
    });
  }

  preload() {
    this.load.image('sky', paths.sky);
  }

  create() {
    this.add.image(400, 300, 'sky');
  }
}
