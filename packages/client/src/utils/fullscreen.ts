interface DocumentElementWithFullscreen
  extends HTMLElement {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

interface DocumentElementWithFullscreen
  extends HTMLElement {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

interface DocumentWithFullscreen
  extends Document {
  mozFullScreenElement?: Element;
  webkitFullscreenElement?: Element;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

const isFullScreen = (): boolean => {
  const DOMDocument =
    document as DocumentWithFullscreen;
  return !!(
    DOMDocument.fullscreenElement ||
    DOMDocument.mozFullScreenElement ||
    DOMDocument.webkitFullscreenElement
  );
};

const exitFullScreen = (
  DOMDocument: DocumentWithFullscreen
) => {
  if (DOMDocument.exitFullscreen) {
    DOMDocument.exitFullscreen();
  } else if (DOMDocument.webkitExitFullscreen) {
    DOMDocument.webkitExitFullscreen();
  } else if (DOMDocument.mozCancelFullScreen) {
    DOMDocument.mozCancelFullScreen();
  }
};

const enterFullScreen = (
  element: DocumentElementWithFullscreen
) => {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
};

export const toggleFullscreen = (
  element: DocumentElementWithFullscreen
) => {
  if (isFullScreen()) {
    exitFullScreen(document);
  } else {
    enterFullScreen(element);
  }
};

type TFullscreenHandler = (
  canvas: HTMLCanvasElement | null
) => EventListenerOrEventListenerObject;

export const fullscreenHandler: TFullscreenHandler =
  canvas => event => {
    const { key } = event as KeyboardEvent;

    if (key === 'Enter' && canvas) {
      toggleFullscreen(document.documentElement);
    }
  };
