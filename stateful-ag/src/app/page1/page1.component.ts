import { Component } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
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

  clickRoute(){
    console.log('route clicked')
  }
}
