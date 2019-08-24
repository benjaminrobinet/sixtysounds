import Components from "./Components";

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
}

const instance = new Bootstrap();

export default instance;