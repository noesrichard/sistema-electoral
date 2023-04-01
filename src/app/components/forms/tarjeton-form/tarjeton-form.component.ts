import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeton-form',
  templateUrl: './tarjeton-form.component.html',
  styleUrls: ['./tarjeton-form.component.css']
})
export class TarjetonFormComponent {

  @Input() tarjeton: {id: string; title: string} = {id: null, title: null}

}
