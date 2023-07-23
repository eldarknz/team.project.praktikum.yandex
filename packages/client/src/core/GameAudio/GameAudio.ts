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

  #soundInit(sound: HTMLAudioElement | undefined, url: string, volume = 1) {
    console.log(sound);
    if (volume <= 0.01) return;
    if (!sound) {
      sound = createAudio(url);
    }
    sound.volume = volume;
    return sound;
  }

  #play(sound: HTMLAudioElement) {
    sound.play();
  }

  #playOrStop(sound: HTMLAudioElement) {
    if (sound.paused) {
      this.#play(sound);
    } else {
      sound.pause();
      sound.currentTime = 0;
    }
  }

  jumpClick(volume = 1) {
    this.jumpSound = this.#soundInit(this.jumpSound, jump, volume);
    this.jumpSound && this.#playOrStop(this.jumpSound);
  }

  stepClick(volume = 1) {
    this.stepSound = this.#soundInit(this.stepSound, step, volume);
    this.stepSound && this.#playOrStop(this.stepSound);
  }

  finishGame(volume = 1) {
    this.finishSound = this.#soundInit(this.finishSound, finish, volume);
    this.finishSound && this.#play(this.finishSound);
  }

  gameOver(volume = 1) {
    this.gameOverSound = this.#soundInit(this.gameOverSound, gameOver, volume);
    this.gameOverSound && this.#play(this.gameOverSound);
  }
}

export const gameAudio = new GameAudio();
