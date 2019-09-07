import { createBrowserHistory } from 'history';
import { EventEmitter } from 'tiny-events';
import Fetcher from './Fetcher';
import 'whatwg-fetch'


class Router extends EventEmitter{
  constructor(){
    super();

    this.elements = [];
    this.history = createBrowserHistory();
    this.fetcher = new Fetcher();
    this.hard = false;

    this.unlisten = this.history.listen((location, action) => {
      console.log(location);
      this.fetcher.fetch(location.pathname).then(response => {
        if(response.ok){
          this.emit('change', {response});
        } else {
          window.location = location.pathname;
        }
      }).catch(error => {
        this.emit('error', {error});
      });
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
    if(!this.hard){
      e.preventDefault();
      e.stopImmediatePropagation();
      if(e.target.dataset.triggered) return;
      e.target.dataset.triggered = true;
    }

    this.emit('beforeChange');

    let src = e.target.getAttribute('data-href') || e.target.getAttribute('href');

    if(src && src.length){
      this.history.push(src);
      // console.log(src);
    }
  }

}

const instance = new Router();
export default instance;