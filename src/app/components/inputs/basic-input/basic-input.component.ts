import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.css']
})
export class BasicInputComponent {

  @Input() label: string = "Label"; 
  @Input() value: any = "Valor"; 
  @Output() valueChange: EventEmitter<any> = new EventEmitter(); 

  handleInput(){ 
    this.valueChange.emit(this.value)
  }

}
