export default class Components{
  constructor(components, options){
    this.components = components;

    this._options = {
      keepAttr: false
    };

    Object.assign(this._options, options);

    this.init();
  }

  init(){
    document.querySelectorAll('[data-component]').forEach(element => {
      const dataComponent = element.dataset.component;
      let _Component = this.components[dataComponent];
      if(_Component){
        _Component = new _Component(element);
      } else {
        throw new Error(`The component "${dataComponent}" doesn't exists. Make sure it is declared.`);
      }

      if(typeof _Component['init'] === "function") _Component.init();
    });
  }
}