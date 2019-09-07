// Add entry point less
import '../less/app.less';
import SoundboxComponent from "./components/SoundboxComponent"
import SoundComponent from "./components/SoundComponent"
import $ from 'jquery';
import Components from './tools/Components'
import Bootstrap from "./tools/Bootstrap";

const components = {
  soundbox: SoundboxComponent,
  sound: SoundComponent
};

Components.setComponents(components);
Components.setup();
Bootstrap.run();

$(function () {

});

