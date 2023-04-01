import { Component, EventEmitter, Output } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-basic-crud',
  templateUrl: './basic-crud.component.html',
  styleUrls: ['./basic-crud.component.css'],
})
export class BasicCrudComponent extends TableComponent {

  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onRowClick: EventEmitter<any> = new EventEmitter();

  override setProperties(): void {
    this.columns.forEach((e) => {
      this.properties.push(e.property);
    });
    this.properties.push('actions')
  }

  handleEdit(row: any): void{ 
    this.onEdit.emit(row); 
  }

  handleDelete(row: any): void{ 
    this.onDelete.emit(row); 
  }

  handleRowClick(row: any): void{ 
    this.onRowClick.emit(row);
  }

}
