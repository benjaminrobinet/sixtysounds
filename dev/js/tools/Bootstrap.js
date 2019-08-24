import Components from "./Components";
import Env from "./Env";
import Router from './Router'

class Bootstrap{
  constructor(){
    this.componentsModules = {};
  }

  run(){
    new Components(this.componentsModules);
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
}

const instance = new Bootstrap();
export default instance;