import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stateful-ag';
  counterNum;
  constructor(private stateService: StateService){
    this.counterNum = this.stateService.state
  }

  incrementNumber(){
    this.stateService.incrementNum()
  }
  decrementNumber(){
    this.stateService.decrementNum()
  }
}
