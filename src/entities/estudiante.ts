import { Column } from 'src/app/components/table/table.component';

export interface Estudiante {
  id: number;
  curso: string;
  cedula: string;
  nombre: string;
  sede: string;
  jornada: string;
  email: string;
}

export const ESTUDIANTES: Estudiante[] = [
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

export const VOIDESTUDIANTE: Estudiante = { 
    id: null,
    curso: null,
    cedula: null,
    nombre: null,
    sede: null,
    jornada: null,
    email: null,
}

export const ESTUDIANTESCOLUMNS: Column[] = [
  {property: "id", label: "ID"},
  {property: "curso", label: "Curso"},
  {property: "cedula", label: "Cedula"},
  {property: "nombre", label: "Nombre"},
  {property: "sede", label: "Sede"},
  {property: "jornada", label: "Jornada"},
  {property: "email", label: "Email"},
];
