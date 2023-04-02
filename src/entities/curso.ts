import { Column } from 'src/app/components/table/table.component';

export interface Curso{ 
  id: number; 
  nombre: string; 
}

export const CURSOS: Curso[] =[
  {
    id: 1,
    nombre: 'ALBUJA ... EMILIA ...',
  },
];

export const CURSOCOLUMNS: Column[] = [
  {property: "id", label: "ID"},
  {property: "curso", label: "Nombre"},
];
