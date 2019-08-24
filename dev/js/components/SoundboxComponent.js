import $ from 'jquery'

export default class SoundboxComponent{
  constructor(container){
    console.log($(container));
  }

  populate(){
    console.log('populate');
  }
}