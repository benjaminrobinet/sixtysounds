// Add entry point less
import '../less/app.less';
import SoundboxComponent from "./components/SoundboxComponent"
import $ from 'jquery';

const components = {
  soundbox: SoundboxComponent
};

$(function () {
  $('[data-component]').each(function(){
    let _Component = components[$(this).data('component')];
    _Component = new _Component($(this));


    if(typeof _Component['populate'] === "function") _Component.populate();
  });
});

