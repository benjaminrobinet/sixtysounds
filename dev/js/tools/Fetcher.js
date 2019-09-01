export default class Fetcher{
  constructor(){
    this.headers = new Headers({
      'X-Requested-With': 'XMLHttpRequest'
    });
    this.init = {
      method: 'GET',
      headers: this.headers
    }
  }

  fetch(url){
    return fetch(url);
  }
}
