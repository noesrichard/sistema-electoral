import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-candidato-card',
  templateUrl: './candidato-card.component.html',
  styleUrls: ['./candidato-card.component.css']
})
export class CandidatoCardComponent {
  @Input() description: string = '';
  @Input() title: string = '';

}
