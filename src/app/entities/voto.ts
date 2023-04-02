import { Column } from 'src/app/components/table/table.component';

export interface Voto{ 
  id: number; 
  estudianteId: number; 
  candidatoId: number; 
}

export const VOTOS: Voto[] =[
  {
    id: 1,
    estudianteId: 1,
    candidatoId: 1,
  },
];

export const VOIDVOTO: Voto = { 
  id: null, 
  estudianteId: null,
  candidatoId: null,
}

export const CURSOCOLUMNS: Column[] = [
  {property: "id", label: "ID"},
  {property: "curso", label: "Nombre"},
];
