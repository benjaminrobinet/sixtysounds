export default class Components{
  constructor(components, options){
    this.components = components;

    this._options = {
      keepAttr: false
    };

    this.currentComponents = [];

    Object.assign(this._options, options);

    this.init();
  }

  init(){
    document.querySelectorAll('[data-component]').forEach(element => {
      const dataComponent = element.dataset.component;
      let _Component = this.components[dataComponent];
      if(_Component){
        this.currentComponents = [...this.currentComponents, new _Component(element)];
      } else {
        throw new Error(`The component "${dataComponent}" doesn't exists. Make sure it is declared.`);
      }
    });
  }

  getComponents(){
    return this.currentComponents;
  }
}