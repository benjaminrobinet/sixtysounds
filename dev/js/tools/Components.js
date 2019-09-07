class Components{
  constructor(){
    this.components;
    this.currentComponents = [];
  }

  setup(){
    document.querySelectorAll('[data-component]').forEach(element => {
      const dataComponent = element.dataset.component;
      let _Component = this.components[dataComponent];
      if(_Component){
        _Component = new _Component(element);
        this.currentComponents = [...this.currentComponents, _Component];
      } else {
        throw new Error(`The component "${dataComponent}" doesn't exists. Make sure it is declared.`);
      }
    });
  }

  /**
   * Return the component object of a DOM Element
   * 
   * @param {Element} element 
   */
  getComponentByElement(element){
    let componentClass = this.components[element.dataset.component].constructor.name
    return this.currentComponents.find(_component => _component.constructor.name === componentClass)
  }

  /**
   * Return all components
   */
  getComponents(){
    return this.currentComponents;
  }

  /**
   * Set the components
   * 
   * Receive an object like
   * {
   *    string: Object
   *    ...: Object
   * }
   * 
   * @param {Object} components 
   */
  setComponents(components){
    this.components = components;
  }
}

export default new Components();