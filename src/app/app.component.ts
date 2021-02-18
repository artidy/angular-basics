import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title'
  img = 'https://banner2.cleanpng.com/20180720/zia/kisspng-react-javascript-library-web-development-vue-js-funding-icon-5b51604fbf7995.0841849115320597277843.jpg'
  inputValue = ''

  constructor() {
    setTimeout(() => {
      this.img = 'https://banner2.cleanpng.com/20180424/kxw/kisspng-angularjs-web-application-single-page-application-original-sticker-5adf7b95b14632.9610094315245956057261.jpg'
    }, 5000)
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }
  
}
