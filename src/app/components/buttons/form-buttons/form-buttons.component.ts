import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: ['./form-buttons.component.css'],
})
export class FormButtonsComponent {

  @Output() onSave: EventEmitter<any> = new EventEmitter(); 
  @Output() onCancel: EventEmitter<any> = new EventEmitter(); 

  handleCancel() {
    this.onCancel.emit() 
  }

  handleSave() {
    this.onSave.emit();
  }
}
