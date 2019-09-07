import md from "mobile-detect"

class Env{
  constructor(){
    this.element = document.documentElement;

    const maxTouchPoints = navigator.maxTouchPoints || navigator.msMaxTouchPoints;
    this.element.classList.add(maxTouchPoints > 0 ? 'touch': 'notouch');
  }
}

const instance = new Env();
export default instance;