import { createBrowserHistory } from 'history';
import { EventEmitter } from 'tiny-events';
import Fetcher from "./Fetcher";


class Router extends EventEmitter{
  constructor(){
    super();

    this.elements = [];
    this.history = createBrowserHistory();
    this.fetcher = new Fetcher();

    this.unlisten = this.history.listen((location, action) => {
      this.emit('change', {location, action})
    });

    this.change = this.change.bind(this);

    this.setup();
  }

  setup(){
    document.querySelectorAll('a, [data-href]').forEach(element => {
      this.elements = [...this.elements, element];
      element.addEventListener('click', this.change);
      element.addEventListener('keyup', e => {
        if(e.keyCode === 13) this.change(e);
      });
      if(element.tagName !== 'a') element.setAttribute('tabindex', '0');
    })
  }

  /**
   *
   * @param {Event} e
   */
  change(e){
    e.preventDefault();
    e.stopImmediatePropagation();
    if(e.target.dataset.triggered) return;
    e.target.dataset.triggered = true;

    let src = e.target.getAttribute('data-href') || e.target.getAttribute('href');

    if(src && src.length){
      console.log(src);
    }
  }

}

const instance = new Router();
export default instance;