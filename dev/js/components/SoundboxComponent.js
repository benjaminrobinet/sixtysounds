import $ from 'jquery'
import Bootstrap from '../tools/Bootstrap'

export default class SoundboxComponent{
  constructor(container){
    console.log($(container));
  }

  init(){
    console.log('init');
  }

  attach(){
    console.log('attach');
  }

  open(){
    console.log('open');
  }
}