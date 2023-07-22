import jump from '@assets/sounds/jump.mp3';
import step from '@assets/sounds/step.mp3';
import finish from '@assets/sounds/finish.mp3';
import gameOver from '@assets/sounds/game_over.mp3';
import createAudio from '@utils/createSound';

class GameAudio {
  private jumpSound: HTMLAudioElement | undefined;
  private stepSound: HTMLAudioElement | undefined;
  private finishSound: HTMLAudioElement | undefined;
  private gameOverSound: HTMLAudioElement | undefined;

  jumpClick(volume = 1) {
    if (volume <= 0.01) return;
    if (!this.jumpSound) {
      this.jumpSound = createAudio(jump);
    }
    this.jumpSound.volume = volume;
    if (this.jumpSound.paused) {
      this.jumpSound.play();
    } else {
      this.jumpSound.currentTime = 0;
    }
  }

  stepClick(volume = 1) {
    if (volume <= 0.01) return;
    if (!this.stepSound) {
      this.stepSound = createAudio(step);
    }
    this.stepSound.volume = volume;
    if (this.stepSound.paused) {
      this.stepSound.play();
    } else {
      this.stepSound.currentTime = 0;
    }
  }

  finishGame(volume = 1) {
    if (volume <= 0.01) return;
    if (!this.finishSound) {
      this.finishSound = createAudio(finish);
    }
    this.finishSound.volume = volume;
    this.finishSound.play();
  }

  gameOver(volume = 1) {
    if (volume <= 0.01) return;
    if (!this.gameOverSound) {
      this.gameOverSound = createAudio(gameOver);
    }
    this.gameOverSound.volume = volume;
    this.gameOverSound.play();
  }
}

export const gameAudio = new GameAudio();
