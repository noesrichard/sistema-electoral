import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from 'src/entities/curso';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent implements OnInit {

  @Input() options: MultiSelectOption[];
  @Input() value: any;
  @Input() multiple: boolean = true;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Input() label: any;

  ngOnInit(): void {
  }

  handleInput(): void{ 
    console.log("Seleccionados: ",this.value)
    this.valueChange.emit(this.value)
  }

}

export interface MultiSelectOption{ 
  id: any; 
  label: any;
  selected: boolean;
}
