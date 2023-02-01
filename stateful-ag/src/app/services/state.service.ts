
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable(
  {
    providedIn:'root'
  }
)
export class StateService{
  state = new BehaviorSubject(0);

  public incrementNum(){
    const newValue = this.state.value
    this.state.next(newValue + 1)
  }
  public decrementNum(){
    const newValue = this.state.value
    if (newValue > 0){
      this.state.next(newValue - 1)
    }
  }
}
