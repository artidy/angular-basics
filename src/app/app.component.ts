import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    LocalCounterService
  ]
})
export class AppComponent {

  private counter: number = this.localCounterSevice.counter

  constructor(public appCounterService: AppCounterService,
              private localCounterSevice: LocalCounterService) { }

  increase() {
    this.localCounterSevice.inc()
    this.setCounter()
  }

  decrease() {
    this.localCounterSevice.dec()
    this.setCounter()
  }

  private setCounter() {
    this.counter = this.localCounterSevice.counter
  }

  getCounter() {
    return this.counter
  }
  
}
