import { Column } from 'src/app/components/table/table.component';
import { Estudiante } from './estudiante';

export const CANDIDATOS: Estudiante[] = [
  {
    id: 1,
    curso: '1BGUA',
    cedula: '1801',
    nombre: 'ALBUJA ... EMILIA ...',
    sede: 'HUACHIPATA',
    jornada: 'VERPERTINA',
    email: 'albuja@estudiantes.edu.ec',
  },
];

export const CANDIDATOSCOLUMNS: Column[] = [
  {property: "curso", label: "Curso"},
  {property: "nombre", label: "Nombre"},
  {property: "jornada", label: "Jornada"},
  {property: "email", label: "Email"},

];
