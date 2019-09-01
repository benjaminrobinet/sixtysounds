import Components from "./Components";
import Env from "./Env";
import Router from './Router'
const {EventEmitter} = require("tiny-events");

class Bootstrap extends EventEmitter{
  constructor(){
    super();
    this.componentsModules = {};

    this.components;

    this.options = {
      root: '#root',
    };

    Router.on('beforeChange', this.routerBeforeChange.bind(this));
    Router.on('change', this.routeChange.bind(this));
    Router.on('error', this.routerError.bind(this));
  }

  run(){
   this.components = new Components(this.componentsModules);
    // CALL STACK
    // INIT
    // ATTACH
    // OPEN
    // CLOSE
    // DETACH


    this.components.getComponents().forEach(component => {
      if(typeof component['init'] === "function") component.init();
      if(typeof component['attach'] === "function") component.attach();
      if(typeof component['open'] === "function") component.open();
    })
  }

  /**
   * @param {Object} components
   */
  setComponents(components){
    this.componentsModules = components;
  }

  getComponents(){
    return this.componentsModules;
  }

  routeChange({response}){
    console.log(response);
  }

  routerError({error}){
    console.log(error);
  }

  routerBeforeChange(){
    this.emit('close');
  }

  changeContent(){
    this.components.run();
  }
}

const instance = new Bootstrap();
export default instance;