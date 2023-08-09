export default function createAudio(src: string) {
  const audio = new Audio();
  audio.src = src;
  return audio;
}
