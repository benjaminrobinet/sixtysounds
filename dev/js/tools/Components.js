export default class Components{
  constructor(components){
    this.components = components;
    this.init();
  }

  init(){
    document.querySelectorAll('[data-component]').forEach(element => {
      let _Component = this.components[element.getAttribute('data-component')];
      if(_Component){
        _Component = new _Component(element);
      } else {
        throw new Error(`The component "${element.getAttribute('data-component')}" doesn't exists. Make sure it is declared.`);
      }

      if(typeof _Component['open'] === "function") _Component.open();
    });
  }
}