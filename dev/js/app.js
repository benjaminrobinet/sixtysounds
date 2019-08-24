// Add entry point less
import '../less/app.less';
import SoundboxComponent from "./components/SoundboxComponent"
import $ from 'jquery';
import Bootstrap from "./tools/Bootstrap";

const components = {
  soundbox: SoundboxComponent
};

Bootstrap.setComponents(components);
Bootstrap.run();

$(function () {

});

