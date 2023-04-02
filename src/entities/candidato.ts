import { Column } from 'src/app/components/table/table.component';
import { Estudiante } from './estudiante';

export interface Candidato{ 
  id: number; 
  nombre: string; 
  tarjetonId: number; 
}

export const CANDIDATOS: Candidato[] =[
  {
    id: 1,
    nombre: 'ALBUJA ... EMILIA ...',
    tarjetonId: 1,
  },
];

export const CANDIDATOSCOLUMNS: Column[] = [
  {property: "curso", label: "Curso"},
  {property: "nombre", label: "Nombre"},
  {property: "jornada", label: "Jornada"},
  {property: "email", label: "Email"},

];
